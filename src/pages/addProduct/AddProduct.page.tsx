import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddProductSelectionStep from './component/selectionStep/AddProductSelectionStep';
import AddProductInfoInputStep from './component/infoInputStep/AddProductInfoInputStep';
import TermsAndPolicyAgreementStep from './component/termsAndPolicyStep/TermsAndPolicyAgreementStep';
import AddProductHeader from './component/AddProductHeader';
import { getCookie } from '../../apis/cookie';

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
								marginRight: index < stepsCompleted.length - 1 ? '10px' : '0', // 맨 끝 바에는 오른쪽 마진X
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
			</div>
		</>
	);
};

export default AddProductPage;
