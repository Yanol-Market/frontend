import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductSelectionStep from './component/selectionStep/AddProductSelectionStep';
import AddProductInfoInputStep from './component/infoInputStep/AddProductInfoInputStep';
import TermsAndPolicyAgreementStep from './component/termsAndPolicyStep/TermsAndPolicyAgreementStep';
import AddProductHeader from './component/AddProductHeader';
import { getCookie } from '../../apis/cookie';
import { getAccounts } from '../../apis/getAccounts';

interface AccountData {
	name: string;
	bankName: string | null;
	accountNumber: string | null;
}

const AddProductPage = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const navigate = useNavigate();
	const [selectedItem, setSelectedItem] = useState<{
		originPrice: number;
		yanoljaPrice: number;
		reservationId: number;
	}>({
		originPrice: 0,
		yanoljaPrice: 0,
		reservationId: 0,
	});

	const [loading, setLoading] = useState(true); // 페이지 로딩 상태 추가
	const [addAccountPage, setAddAccountPage] = useState(false);
	const [accountData, setAccountData] = useState<AccountData | null>(null);

	const setItem = (item: {
		originPrice: number;
		yanoljaPrice: number;
		reservationId: number;
	}) => {
		setSelectedItem(item);
	};

	const handleNextStepSelection = (item: {
		originPrice: number;
		yanoljaPrice: number;
		reservationId: number;
	}) => {
		setSelectedItem(item);
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
		navigate(`/addproduct/${nextStep}`);
	};

	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (!accessToken) {
			navigate('/signin');
		} else {
			const fetchAccountData = async () => {
				try {
					const response = await getAccounts();
					if (response.status === 'SUCCESS' && response.data) {
						setAccountData(response.data);
						console.log('계좌 목록:', response.data);
					}
				} catch (error) {
					console.error('계좌 정보를 불러오는 중 오류 발생:', error);
				} finally {
					setLoading(false); // 데이터 로딩 완료 후 로딩 상태 업데이트
				}
			};
			// 페이지가 로드될 때마다 계좌 데이터를 가져와서 팝업
			fetchAccountData();
			if (location.pathname === '/addproduct') {
				setAddAccountPage(true);
			}
		}
	}, []);

	const handleNextStep = () => {
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
		navigate(`/addproduct/${nextStep}`, {
			state: {
				...selectedItem,
			},
		});
	};

	const handlePrevStep = () => {
		if (currentStep > 1) {
			const prevStep = currentStep - 1;
			setCurrentStep(prevStep);
			navigate(`/addproduct/${prevStep}`);
		} else {
			navigate('/');
		}
	};

	const handleComplete = () => {
		navigate('/');
	};

	const stepsCompleted = Array(3).fill(false);
	for (let i = 0; i < currentStep; i++) {
		stepsCompleted[i] = true;
	}

	return (
		<>
			<AddProductHeader
				title="상품등록"
				handleArrowBackClick={handlePrevStep}
			/>
			<div>
				{loading ? (
					<div>Loading...</div>
				) : accountData !== null && accountData.bankName !== null ? (
					<>
						<div className="fixed flex px-5 bg-white z-10">
							{stepsCompleted.map((completed, index) => (
								<div
									key={index}
									className={` rounded-md mb-[1.875rem] mt-[4.8125rem] ${
										completed ? 'bg-main' : 'bg-borderGray'
									}`}
									style={{
										width: '123px',
										height: '2px',
										marginRight:
											index < stepsCompleted.length - 1 ? '10px' : '0', // 맨 끝 바에는 오른쪽 마진X
									}}
								/>
							))}
						</div>
						{currentStep === 1 && (
							<AddProductSelectionStep onNextStep={handleNextStepSelection} />
						)}
						{currentStep === 2 && (
							<AddProductInfoInputStep
								onPrevStep={handlePrevStep}
								onNextStep={handleNextStep}
								originPrice={selectedItem.originPrice}
								yanoljaPrice={selectedItem.yanoljaPrice}
								reservationId={selectedItem.reservationId}
								setItem={setItem}
							/>
						)}
						{currentStep === 3 && (
							<TermsAndPolicyAgreementStep
								onPrevStep={handlePrevStep}
								onComplete={handleComplete}
								selectedItem={selectedItem}
							/>
						)}
					</>
				) : (
					<div className="h-screen">
						<div className="h-[86%] flex flex-col items-center justify-center">
							<img src="/assets/images/wallet.svg" alt="" />
							<h2 className="text-body font-light my-[20px]">
								내 계좌를 등록해주세요!
							</h2>
							<p className="text-center text-m text-descGray font-thin leading-[1.5rem] tracking-wide">
								상품 등록을 하기 전에 정산을 위해서 <br />내 계좌를 먼저
								등록해주세요.
							</p>
						</div>
						<div className="m-[20px]">
							<button
								onClick={() => navigate('/myaccount')}
								className="w-[100%] h-[50px] bg-main rounded-[12px] text-white text-lg"
							>
								내 계좌 등록하러 가기
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default AddProductPage;
