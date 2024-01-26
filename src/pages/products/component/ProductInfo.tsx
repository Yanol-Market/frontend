import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteProduct, getProduct } from '../../../apis/detail';
import { formatDate } from '../../../utils/b';
import { FormatLimitText } from '../../../utils/formate';
import { addWish } from '../../../apis/wish';
import { deleteWish } from '../../../apis/wish';
import { useRecoilState } from 'recoil';
import { getPaymentsDetail } from '../../../apis/paymentsDetail';
import { paymentsState, sendMessage, userIdState } from '../../../recoil/atom';
import { editProdState } from '../../../recoil/prodEditAtom';
import { BottomSheet } from '../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import instance from '../../../apis/axios';
import ContentFailBtn from '../../../component/common/BottomSheet/Content/ContentFailBtnPage';
import { getCookie } from '../../../apis/cookie';

type ProductDetailType = {
	isWished: boolean;
	isSeller: boolean;
	negoProductStatus: string;
	accommodationImage: string;
	accommodationName: string;
	accommodationAddress: string;
	reservationType: string;
	roomName: string;
	standardNumber: number;
	maximumNumber: number;
	checkInTime: string;
	checkOutTime: string;
	checkInDate: string;
	checkOutDate: string;
	nights: number;
	days: number;
	originPrice: number;
	yanoljaPrice: number;
	goldenPrice: number;
	originPriceRatio: number;
	marketPriceRatio: number;
	content: string;
	productStatus: string;
	wishId: number;
};

export const ProductInfo = () => {
	const [bottom, setBottom] = useState(false);
	const [bottomAlert, setBottomAlert] = useState(false);
	const [bottomAlertSecond, setBottomAlertSecond] = useState(false);
	const navigate = useNavigate();
	const param = useParams();
	const [isWished, setIsWished] = useState(false);
	const [isSeller, setIsSeller] = useState(false);
	const [editProd, setEditProd] = useRecoilState(editProdState);
	const [checkInDate, setCheckInDate] = useState<string | undefined>();
	const [checkOutDate, setCheckOutDate] = useState<string | undefined>();
	const [product, setProduct] = useState<ProductDetailType>();
	const [payData, setPayData] = useRecoilState(paymentsState);

	const fetchData = async () => {
		const data = await getProduct(param?.productId);
		setCheckInDate(data.data.checkInDate);
		setCheckOutDate(data.data.checkOutDate);
		setProduct(data.data);
		setIsWished(data.data.isWished);
		setIsSeller(data.data.isSeller);
	};

	const handleClickButton = (link: string) => {
		const isLogin = false;
		if (isLogin) {
			navigate('/login');
		}

		navigate(link);
	};

	const [userId, setUserId] = useRecoilState<number>(userIdState);
	const [chatRoomId, setChatRoomId] = useState<number>(0);
	const [negoAvailable, setNegoAvailable] = useState<boolean>(true);
	const [isNewChatRoom, setIsNewChatRoom] = useState<boolean>(true);

	// 유저 아이디 가져오기
	useEffect(() => {
		async function getUser() {
			try {
				const response = await instance.get('/users/me');
				setUserId(response.data.data.id);
			} catch (error) {
				console.error(error);
			}
		}
		getUser();
	}, []);

	// 네고 정보 조회

	const getChatRoomInfo = async (): Promise<{
		chatRoomId: number;
		negoAvailable: boolean;
	}> => {
		try {
			const response = await instance.get(
				`/nego/available?productId=${param?.productId}`,
			);
			const data = response?.data.data || {};

			const chatRoomId = data.chatRoomId || 0;
			const negoAvailable = data.negoAvailable || false;

			setChatRoomId(chatRoomId);
			setIsNewChatRoom(data.isNewChatRoom || false);
			setNegoAvailable(negoAvailable);

			return { chatRoomId, negoAvailable };
		} catch (error) {
			console.error(error);
			return { chatRoomId: 0, negoAvailable: false };
		}
	};

	// 트리거 함수

	const createChat = async () => {
		const {
			chatRoomId,
			negoAvailable,
		}: { chatRoomId: number; negoAvailable: boolean } = await getChatRoomInfo();
		try {
			return { chatRoomId, negoAvailable };
		} catch (error) {
			console.error('Error in createChat:', error);
		}
	};

	// 채팅방 생성 함수

	const makeChatRoom = async () => {
		const data = {
			userId,
			productId: param.productId,
		};
		try {
			const response = await instance.post('/chats/test/chat-room', data);
			setChatRoomId(response.data.id);
			return response.data.id;
		} catch (error) {
			console.log(error);
		}
	};

	// 메시지 보내기 함수

	const initialMessageSend = async () => {
		const data = {
			chatRoomId,
			senderType: 'SELLER',
			userId,
			content: `${product?.accommodationName} ${product?.roomName} ${product?.checkInDate} ~ ${product?.checkOutDate} ${product?.goldenPrice.toLocaleString(
				'ko-KR',
			)} 원에 팝니다. 가격 협의 가능합니다.`,
		};

		try {
			const result = await sendMessage(data);
		} catch (error) {
			console.error('메시지 전송 중 오류 발생:', error);
		}
	};

	const handleClickHeart = async (productId: number) => {
		if (!isWished) {
			addWish(productId);
			setIsWished(true);
		}
		if (isWished) {
			deleteWish(productId as number);
			setIsWished(false);
		}
	};
	const handleClickPayMentsButton = async (link: string) => {
		try {
			const payData = await getPaymentsDetail(param?.productId);
			setPayData(payData.data);
			navigate(link);
		} catch (error) {
			throw new Error('결제 상세페이지 이동 실패');
		}
	};

	const openBottom = () => {
		setBottom(true);
	};
	const openBottomAlert = () => {
		setBottomAlert(true);
	};
	const openBottomAlertSecond = () => {
		setBottomAlertSecond(true);
	};

	const closeBottom = () => {
		setBottom(false);
	};
	const closeBottomAlert = () => {
		setBottomAlert(false);
	};
	const closeBottomAlertSecond = () => {
		setBottomAlertSecond(false);
	};
	const dltProduct = (productId: string) => {
		deleteProduct(productId);
		closeBottom();
		navigate('/');
	};
	useEffect(() => {
		fetchData();
	}, []);

	if (!product) {
		return <div>Loading...</div>;
	}

	console.log(product);
	return (
		<div className="">
			<div className="relative mb-5">
				<img
					className="w-full h-[205px]"
					src={product.accommodationImage}
					alt="productImg"
				/>
				<p className="absolute top-0 rounded-br-[5px] text-m font-semibold text-white bg-subBtn px-2 py-1">
					D-{product.days}
				</p>
				{!(product.productStatus === 'SELLING') && (
					<div className="w-full h-[205px] bg-black opacity-[80%] absolute bottom-[0px] flex flex-col justify-center items-center">
						<img
							className="mb-5"
							src={`/assets/images/ic_${product.productStatus}.svg`}
							alt="ic_calendar"
						/>
						<pre className="text-lg text-center text-white font-semibold">
							{productStatusAlertTitle(product.productStatus as string)}
						</pre>
					</div>
				)}
			</div>
			<div className="px-5 mb-[13px]">
				<div className="flex justify-between">
					<p className="text-black text-headline2 font-semibold">
						{product.accommodationName}
					</p>
					<button
						onClick={() => {
							handleClickHeart(Number(param.productId));
						}}
					>
						<img
							src={`/assets/images/${isWished ? 'Fill' : ''}heart_xl.svg`}
							alt="heartIcon"
						/>
					</button>
				</div>
				<p className="text-black text-headline2 font-medium">
					{product.roomName}
				</p>
			</div>
			<div className="px-5 flex justify-between">
				<div className="flex item-center mb-5">
					<p className="py-1 px-2  rounded-[20px] border-[1px] border-solid border-borderGray bg-lightGray text-sm text-black mr-[6px]">
						{product.reservationType === 'DAY_USE' ? '대실' : '숙박'}
					</p>
					<p className="text-m text-black m-auto ">{`기존 ${product.standardNumber}명/최대 ${product.maximumNumber}명`}</p>
				</div>
				<div className="flex item-center mb-5">
					<img
						className="w-[11px] mr-1"
						src="/assets/images/location_sm.svg"
						alt=""
					/>
					<p className="text-black text-m m-auto">
						{FormatLimitText(product.accommodationAddress, 20)}
					</p>
				</div>
			</div>
			<div className="flex justify-around text-center text-m bg-lightGray p-[10px] rounded-[10px] mx-5 mb-[25px]">
				<div>
					<p className="font-bold mb-[5px]">체크인</p>
					<p>{`${checkInDate} ${product.checkInTime}`}</p>
				</div>
				<div className="p-10px border-r-[1px] border-[#e0e0e0] h-[40px]"></div>
				<div>
					<p className="font-bold mb-[5px]">체크아웃</p>
					<p>{`${checkOutDate} ${product.checkOutTime}`}</p>
				</div>
			</div>
			<div className="w-full px-5 mb-5">
				<div className="flex justify-between w-[100%]">
					<p className="text-descGray font-pre text-lg">현재 야놀자 판매가</p>
					<div className="flex">
						<p className="text-descGray font-pre text-lg mr-1">
							{product.marketPriceRatio}%
						</p>
						<p className="text-descGray font-pre text-lg line-through">
							{product.yanoljaPrice.toLocaleString()}
						</p>
						<p className="text-descGray font-pre text-lg line-through">원</p>
					</div>
				</div>
				<div className="flex justify-between w-[100%]">
					<p className="text-descGray font-pre text-lg">기존 구매가</p>
					<div className="flex">
						<p className="text-descGray font-pre text-lg mr-1">
							{product.originPriceRatio}%
						</p>
						<p className="text-descGray font-pre text-lg line-through">
							{product.originPrice.toLocaleString()}
						</p>
						<p className="text-descGray font-pre text-lg line-through">원</p>
					</div>
				</div>
				<div className="flex justify-between w-[100%]">
					<p className="text-subBtn font-pre text-lg font-semibold">
						골든 특가
					</p>
					<div className="flex">
						<p className="text-subBtn font-pre text-lg font-semibold">
							{product.goldenPrice.toLocaleString()}
						</p>
						<p className="text-subBtn font-pre text-lg font-semibold">원</p>
					</div>
				</div>
			</div>
			<div>
				<div className="bg-bgMain p-5">
					<div className="mb-5">
						<div className="flex mb-[10px]">
							<p className="text-black text-lg font-semibold mr-1">
								판매자의 한마디
							</p>
							<img src="/assets/images/chat.svg" alt="chatIcon" />
						</div>
						<p
							className={`${
								product.content ? 'text-black' : 'text-descGray'
							} p-5 bg-white border-[1px] border-solid border-borderGray rounded-[12px] text-m min-h-[105px]`}
						>
							{product.content ? product.content : '판매자 한마디가 없습니다.'}
						</p>
					</div>
					<div className="mb-[25px]">
						<div className="flex mb-[10px]">
							<p className={`text-black text-lg font-semibold mr-1`}>
								취소 및 환불 규정
							</p>
							<img src="/assets/images/warning.svg" alt="chatIcon" />
						</div>
						<div className="p-5 bg-white min-h-[105px]  border-[1px] border-solid border-borderGray rounded-[12px] ">
							<p className="text-m font-semibold text-fontBlack">
								자세한 환불규정은 이용약관 참고 부탁드립니다.
							</p>
							<p className="text-m font-medium text-fontBlack">
								골든 티켓은 취소 불가 혹은 취소 수수료가 발생하는 이용 일자임박
								숙박 상품을 취급하고 있습니다.
								<br />
								골든티켓 상품은 결제 이후,취소 및 환불이 불가합니다.
							</p>
						</div>
					</div>
					<div>
						<div className="flex mb-5">
							<p className="text-fontBlack font-lg text-semibold mr-1">
								안전한 골든티켓 획득 과정
							</p>
							<img src="/assets/images/locked.svg" alt="lockedIcon" />
						</div>
						<div className="flex">
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								네고 진행
							</p>
							<div className="h-[2px] w-[10px] bg-main m-auto"></div>
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								결제 진행
							</p>
							<div className="h-[2px] w-[10px] bg-main m-auto"></div>
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								양도 대기
							</p>
							<div className="h-[2px] w-[10px] bg-main m-auto"></div>
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								20분 내 양도 완료
							</p>
						</div>
					</div>
				</div>
				<div className="flex px-5 pt-[60px] pb-[30px] justify-between">
					{isSeller ? (
						<button
							disabled={
								product.productStatus === 'SOLD_OUT' ||
								product.productStatus === 'EXPIRED'
									? true
									: false
							}
							onClick={() => {
								if (product.negoProductStatus === 'NEGOTIATION_HAVE') {
									openBottomAlert();
									return;
								}
								setEditProd({
									yanolja: product.yanoljaPrice,
									origin: product.originPrice,
									golden: product.goldenPrice,
								});
								handleClickButton(`/edit/${param.productId}`);
							}}
							className="p-2 w-[160px] h-[50px] rounded-[12px] text-white text-lg font-[500] bg-subBtn"
						>
							수정하기
						</button>
					) : (
						<button
							disabled={product.productStatus === 'SELLING' ? false : true}
							onClick={async () => {
								const response = await createChat();
								console.log(response);
								if (response?.negoAvailable === false) {
									if (response?.chatRoomId !== -1) {
										handleClickButton(`/chat?chatId=${response?.chatRoomId}`);
									} else {
										alert('더이상 네고를 진행할 수 없습니다.');
									}
								} else if (response?.chatRoomId !== -1) {
									handleClickButton(`/chat?chatId=${response?.chatRoomId}`);
								}
							}}
							className="p-2 w-[160px] h-[50px] rounded-[12px] text-white text-lg font-[500] bg-subBtn"
						>
							네고하기
						</button>
					)}
					{isSeller ? (
						<button
							disabled={
								product.productStatus === 'SOLD_OUT' ||
								product.productStatus === 'EXPIRED'
									? false
									: true
							}
							onClick={() => {
								openBottom();
							}}
							className="p-2 w-[160px] h-[50px] rounded-[12px] text-white text-lg font-[500] bg-main"
						>
							삭제하기
						</button>
					) : (
						<button
							disabled={product.productStatus === 'SELLING' ? false : true}
							onClick={() => {
								handleClickPayMentsButton(
									`/reservation?productId=${param.productId}`,
								);
							}}
							className="p-2 w-[160px] h-[50px] rounded-[12px] text-white text-lg font-[500] bg-main"
						>
							예약하기
						</button>
					)}
				</div>
			</div>
			<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
				<ContentTwoBtnPage
					title="판매 정보를 삭제하시겠습니까?"
					leftBtn="취소"
					rightBtn="삭제"
					leftBtnFunc={closeBottom}
					rightBtnFunc={() => {
						dltProduct(param.productId as string);
					}}
				/>
			</BottomSheet>
			<BottomSheet
				isOpen={bottomAlert}
				onClose={closeBottomAlert}
				viewHeight="220px"
			>
				<ContentFailBtn
					title="구매자가 거래 중인경우 상품수정이 불가합니다."
					btn={'확인'}
					btnFunc={closeBottomAlert}
				/>
			</BottomSheet>
			<BottomSheet
				isOpen={bottomAlertSecond}
				onClose={closeBottomAlertSecond}
				viewHeight="220px"
			>
				<ContentFailBtn
					title="더 이상의 네고 진행이 불가능합니다."
					btn={'확인'}
					btnFunc={closeBottomAlertSecond}
				/>
			</BottomSheet>
		</div>
	);
};

const productStatusAlertTitle = (productStatus: string) => {
	let title;
	switch (productStatus) {
		case 'RESERVED':
			title = `예약 중인 상품이에요!
찜 하시면 판매 중일때 다시 알려드릴게요
`;
			break;
		case 'SOLD_OUT':
			title = `아쉽지만 이미 팔렸어요`;
			break;
		case 'EXPIRED':
			title = `기간이 만료된 상품이에요`;
			break;
	}
	return title;
};
