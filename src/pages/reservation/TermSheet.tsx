import React, { useEffect, useState } from 'react';
import { RequestPayParams, RequestPayResponse } from '../../type/portone';
import { useMutation } from '@tanstack/react-query';
import { paymentPrePare } from '../../apis/paymentPrepare';
import { useRecoilValue } from 'recoil';
import {
	buyerIdState,
	chatRoomIdState,
	paymentsState,
	sellerIdState,
	sendMessage,
	userIdState,
} from '../../recoil/atom';
import instance from '../../apis/axios';
import { useNavigate } from 'react-router-dom';

interface TermSheetProps {
	setTermSheet: (value: boolean) => void;
}
interface PgDataProps {
	email: string;
	orderId: number;
	phoneNumber: string;
	price: number;
	roomName: string;
	userName: string;
}
const TermSheet: React.FC<TermSheetProps> = ({ setTermSheet }) => {
	const redirectURL = 'https://golden-ticket.site/payments/mobile/result';
	const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({
		term1: false,
		term2: false,
		term3: false,
	});
	const navigate = useNavigate();
	const impCode = process.env.REACT_APP_PG_CLASSIFIER_CODE;
	const payPreData = useRecoilValue(paymentsState);
	const userId = useRecoilValue(userIdState);
	const buyerId = useRecoilValue(buyerIdState);

	const mutation = useMutation({
		mutationFn: paymentPrePare,
		onSuccess(data) {
			console.log('paymentPrePare 함수 호출 후 데이터 :', data.data);
			console.log('결제 준비 완료');
			if (data.data) {
				handlePayment(data.data);
				console.log('handlePayment 함수 실행 완료');
			}
		},
		onError(err) {
			console.error(err);
			throw new Error('로그인 실패');
		},
	});

	const onClickPayment = () => {
		console.log('payPreData: ', payPreData);
		if (payPreData) {
			mutation.mutate(payPreData.orderId);
		}
	};

	const [checkAll, setCheckAll] = useState(false);

	useEffect(() => {
		const areAnyFalse = Object.values(checkboxes).includes(false);

		if (areAnyFalse) {
			setCheckAll(false);
		}
	}, [checkboxes]);

	useEffect(() => {
		const allChecked = Object.values(checkboxes).every(
			(value) => value === true,
		);
		setCheckAll(allChecked);
	}, [checkboxes]);

	const handlePayment = (paymentData: PgDataProps) => {
		if (!window.IMP) return;

		if (impCode) {
			console.log(impCode);
			window.IMP.init(impCode);
			const data: RequestPayParams = {
				pg: 'html5_inicis.INIBillTst',
				pay_method: 'card',
				merchant_uid: String(paymentData?.orderId),
				amount: paymentData?.price as number,
				name: paymentData?.roomName,
				buyer_name: paymentData?.userName,
				buyer_tel: paymentData?.phoneNumber || '',
				buyer_email: paymentData?.email || '',
				m_redirect_url: redirectURL,
			};

			try {
				console.log('Payment data:', data);
				window.IMP.request_pay(data, callback);
				console.log('KG결제창 완료');
			} catch (error) {
				console.error('결제 중 발생한 에러:', error);
				navigate('/reservation/failure');
			}
		}
	};

	const callback = async (response: RequestPayResponse) => {
		console.log(response);
		if (response.success) {
			try {
				const res = await instance.post('/payments/result', {
					impUid: response.imp_uid,
					orderId: payPreData?.orderId,
				});
				console.log(res);
				if (res) {
					const sendMessages = async () => {
						const data1 = {
							chatRoomId: res.data.data.chatRoomId,
							senderType: 'BUYER',
							userId: userId,
							content: '결제 완료했습니다.',
						};

						const data2 = {
							chatRoomId: res.data.data.chatRoomId,
							senderType: 'SYSTEM',
							userId: userId,
							content: `구매자가 결제를 완료했습니다. 20분 이내 양도 미신청 시, 자동 양도됩니다.`,
						};

						const data3 = {
							chatRoomId: res.data.data.chatRoomId,
							senderType: 'SYSTEM',
							userId: buyerId,
							content: `결제가 완료되었습니다. 판매자가 20분 이내 양도 신청 후 거래가 완료됩니다. 20분 이후에는 양도가 자동 신청됩니다. 판매자가 양도 취소 시에는 결제금액이 100% 환불됩니다.`,
						};

						try {
							const result1 = await sendMessage(data1);
							console.log('첫 번째 메시지 전송 결과:', result1);

							const result2 = await sendMessage(data2);
							console.log('두 번째 메시지 전송 결과:', result2);

							const result3 = await sendMessage(data3);
							console.log('세 번째 메시지 전송 결과:', result3);
						} catch (error) {
							console.error('메시지 전송 중 오류 발생:', error);
						}
					};
					sendMessages();
					console.log('사후검증 후 응답받는 값: ', res.data.data);
					if (res.data.data.result === 'SUCCESS') {
						navigate(
							`/reservation/complete?chatRoomId=${res.data.data.chatRoomId}`,
						);
					} else if (res.data.data.result === 'TIME_OVER') {
						navigate(
							`/reservation/timeout?chatRoomId=${res.data.data.chatRoomId}`,
						);
					} else {
						navigate('/reservation/failure');
					}
				}
			} catch (err) {
				console.error(err);
				throw new Error('사후검증 실패');
			}
		} else {
			console.log('결제 실패');
			navigate('/reservation/failure');
		}
	};

	const checkAllCheckboxes = () => {
		const updatedCheckboxes = { ...checkboxes };

		for (const key in updatedCheckboxes) {
			if (updatedCheckboxes[key] === false) {
				updatedCheckboxes[key] = !updatedCheckboxes[key];
				setCheckAll(true);
			} else {
				updatedCheckboxes[key] = true;
			}
		}
		setCheckboxes(updatedCheckboxes);
	};

	return (
		<div>
			<div
				className="absolute top-0 z-50 h-[100%] w-[100%] bg-black opacity-75"
				onClick={() => setTermSheet(false)}
			></div>
			<div className="animate-slide-up absolute z-50 bottom-0 h-[500px] w-[100%] bg-white rounded-t-[20px] leading-tight tracking-tight">
				<div className="m-[20px]">
					<h2 className="p-[20px] mx-[15px] text-body font-semibold">
						양도 안내사항
					</h2>
					<div className="flex text-m">
						<input
							id="term1"
							type="checkbox"
							checked={checkboxes.term1}
							onChange={() => {
								setCheckboxes({
									...checkboxes,
									term1: !checkboxes.term1,
								});
							}}
							className="hidden"
						/>

						<label htmlFor="term1" className="cursor-pointer"></label>

						<style>
							{`
                  
                        input#term1 + label:before{
                            content:"";
                            display:block;
                            width:16px;
                            height:16px;
                            border:2px solid #e5e5e5;
                            border-radius: 5px;
                            vertical-align:middle;
                            margin: 10px;

                        }

                        input#term1:checked + label:before {
                            content: "";
                            background-color: #FFCC00;
                            background-image: url(/assets/images/reserveCheck.svg);
                            background-repeat: no-repeat;
                            background-size: 10px 10px; 
                            background-position: center center;
                            border:2px solid #FFCC00;
                            z-index: 9; 
                        }

                        `}
						</style>

						<strong>
							<p>
								숙박권 구매와 관련하여 정확한 정보를 제공하였으며 <br />
								개인 정보 제공에 동의합니다.
							</p>
						</strong>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-m m-[15px]">
							본 숙박권은 판매자가 직접 양도 요청을 해야 하는 상품으로 <br />
							고객님의 개인 정보는 숙박권 양도를 위해서만 사용됩니다.
						</p>
					</div>
				</div>
				<div className="w-[100%] border-[1px] border-[#F5F5F5]"></div>
				<div className="m-[20px]">
					<h2 className="px-[20px] mx-[15px] pb-[20px] text-body font-semibold">
						취소 및 환불 규정
					</h2>
					<div className="flex text-m">
						<input
							id="term2"
							type="checkbox"
							checked={checkboxes.term2}
							onChange={() => {
								setCheckboxes({
									...checkboxes,
									term2: !checkboxes.term2,
								});
							}}
							className="hidden"
						/>

						<label htmlFor="term2" className="cursor-pointer"></label>

						<style>
							{`
                  
                        input#term2 + label:before{
                            content:"";
                            display:block;
                            width:16px;
                            height:16px;
                            border:2px solid #e5e5e5;
                            border-radius: 5px;
                            vertical-align:middle;
                            margin: 10px;

                        }

                        input#term2:checked + label:before {
                            content: "";
                            background-color: #FFCC00;
                            background-image: url(/assets/images/reserveCheck.svg);
                            background-repeat: no-repeat;
                            background-size: 10px 10px; 
                            background-position: center center;
                            border:2px solid #FFCC00;
                            z-index: 9; 
                        }

                        `}
						</style>
						<p className="pb-[15px]">
							판매자 측 사유 (다른 사용자에게 양도, 판매 포기, 미응답 등)로{' '}
							<br />
							양도 불발 시, 수수료를 포함한 결제금 전액이 환불됩니다.
						</p>
					</div>
					<div className="flex text-m">
						<input
							id="term3"
							type="checkbox"
							checked={checkboxes.term3}
							onChange={() => {
								setCheckboxes({
									...checkboxes,
									term3: !checkboxes.term3,
								});
							}}
							className="hidden"
						/>

						<label htmlFor="term3" className="cursor-pointer"></label>

						<style>
							{`
                  
                        input#term3 + label:before{
                            content:"";
                            display:block;
                            width:16px;
                            height:16px;
                            border:2px solid #e5e5e5;
                            border-radius: 5px;
                            vertical-align:middle;
                            margin: 10px;

                        }

                        input#term3:checked + label:before {
                            content: "";
                            background-color: #FFCC00;
                            background-image: url(/assets/images/reserveCheck.svg);
                            background-repeat: no-repeat;
                            background-size: 10px 10px; 
                            background-position: center center;
                            border:2px solid #FFCC00;
                            z-index: 9; 
                        }

                        `}
						</style>
						<p>
							골든티켓은 취소 불가 혹은 취소 수수료가 발생하는 이용 <br />
							일자 임박 숙박 상품을 취급하고 있습니다. <br />
							골든티켓 상품은 결제 이후, 취소 및 환불이 불가합니다.
						</p>
					</div>
				</div>
				<div className="flex items-center px-[20px]">
					<input
						id="termAll"
						type="checkbox"
						onChange={checkAllCheckboxes}
						className="hidden"
						checked={checkAll}
					/>

					<label htmlFor="termAll" className="cursor-pointer"></label>

					<style>
						{`
                  
                        input#termAll + label:before{
                            content:"";
                            display:block;
                            width:16px;
                            height:16px;
                            border:2px solid #e5e5e5;
                            border-radius: 5px;
                            vertical-align:middle;
                            margin: 10px;

                        }

                        input#termAll:checked + label:before {
                            content: "";
                            background-color: #FFCC00;
                            background-image: url(/assets/images/reserveCheck.svg);
                            background-repeat: no-repeat;
                            background-size: 10px 10px; 
                            background-position: center center;
                            border:2px solid #FFCC00;
                            z-index: 9; 
                        }

                        `}
					</style>
					<h2 className="text-body font-semibold">전체 동의</h2>
				</div>
				<div className="m-[20px]">
					<button
						disabled={!checkAll}
						className={`w-[100%] h-[50px] text-lg ${
							checkAll ? 'bg-[#FFCC00]' : 'bg-[#e5e5e5]'
						} ${checkAll ? 'text-white' : 'text-[#828282]'} rounded-[12px]`}
						onClick={onClickPayment}
					>
						결제하기
					</button>
				</div>
			</div>
		</div>
	);
};

export default TermSheet;
