import React, { useState } from 'react';
import CompletionScreen from '../CompletionScreen';
import { registerProduct } from '../../../../apis/products';

interface Props {
	onPrevStep?: () => void;
	onComplete: () => void;
	selectedItem: {
		originPrice: number;
		yanoljaPrice: number;
		reservationId: number;
		goldenPrice?: number;
		content?: string;
	};
}

const TermsAndPolicyAgreementStep = ({ onComplete, selectedItem }: Props) => {
	const [agreed, setAgreed] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);

	const handleNextButtonClick = async () => {
		if (agreed) {
			try {
				const { reservationId, goldenPrice, content } = selectedItem;
				const response = await registerProduct(reservationId.toString(), {
					goldenPrice: goldenPrice || 0,
					content: content || '',
				});
				setIsCompleted(true);
				// 서버 응답 처리
				console.log('상품 등록 성공:', response);
			} catch (error) {
				console.error('상품 등록 오류:', error);
				// 오류 처리
			}
		} else {
			alert('약관에 동의해주세요!');
		}
	};

	const handleCompleteButtonClick = () => {
		onComplete();
	};

	return (
		<div>
			<div>
				<h2 className="text-body ml-5 mb-4 fixed top-[6.5rem]">
					약관 및 정책 동의
				</h2>
				<div className="fixed top-[9rem] w-[375px] h-[0.4375rem] bg-lightGray" />
				<div className="flex flex-col h-screen text-black">
					<h3 className="text-body font-semibold mt-[11rem] ml-5 my-5">
						약관 및 정책
					</h3>
					{/* 약관 및 정책 내용 */}
					<div className="bg-lightGray p-4 rounded-xl max-w-[335px] mx-auto mb-4 text-sm">
						<ul>
							<li className="text-alarmRed mb-4">
								• 판매하고자 하는 상품은 양도 가능한 상품임을 확인하였으며, 양도
								불가 상품 판매 시 페널티가 발생 수 있습니다.
							</li>
							<li className="mb-4">
								• 골든티켓에 등록하신 상품을 다른 곳에서 이중판매하실 경우
								발생한 불이익에 대해서 자사는 책임지지 않으며 이미 판매된
								예약권에 대한 소유권은 골든티켓 고객에게 우선적으로 있음을
								동의합니다.
							</li>
							<li>
								• 판매등록 후 상품 검수, 양도 시 발생하는 확인절차와 양도절차에
								대한 업무는 전적으로 골든티켓에 위임함에 동의합니다.
							</li>
						</ul>
					</div>

					{/* 동의 체크박스 */}
					<div className="flex flex-col mx-auto">
						<div className="flex mb-3">
							<input
								type="checkbox"
								className="mt-[0.15rem] appearance-none bg-[url('pages/addProduct/component/termsAndPolicyStep/unchecked.svg')] w-4 h-4 mr-2 checked:bg-[url('pages/addProduct/component/termsAndPolicyStep/checked.svg')]"
								checked={agreed}
								onChange={() => setAgreed(!agreed)}
							/>
							<label className="font-medium text-lg">
								위 내용을 숙지하였고 동의합니다.(필수)
							</label>
						</div>
						<p className="text-sm mx-auto">
							비동의 시 골든티켓에서의 판매가 불가합니다.
						</p>
					</div>

					{/* 다음 버튼 */}
					<div className="fixed bottom-7 left-0 right-0 flex justify-center">
						<button
							type="button"
							className={`mx-auto bg-borderGray w-[20.9375rem] h-[3.125rem] rounded-xl text-lg ${
								agreed
									? 'text-white bg-main cursor-pointer'
									: 'text-descGray cursor-not-allowed'
							}`}
							onClick={
								isCompleted ? handleCompleteButtonClick : handleNextButtonClick
							}
						>
							{agreed ? '완료' : '다음'}
						</button>
					</div>
					{/* 완료 화면 */}
					{isCompleted && <CompletionScreen onComplete={onComplete} />}
				</div>
			</div>
		</div>
	);
};

export default TermsAndPolicyAgreementStep;
