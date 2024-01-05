import React from 'react';

interface Props {
	onNextStep: () => void;
	onPrevStep: () => void;
}

const AddProductInfoInputStep = ({ onPrevStep, onNextStep }: Props) => {
	// 필요한 로직 및 상태 관리

	return (
		<div>
			<h2>판매 정보 입력</h2>
			{/* 정보 입력 관련 컴포넌트 및 로직 */}
			<button onClick={onPrevStep}>이전 단계</button>
			<button onClick={onNextStep}>다음 단계</button>
		</div>
	);
};

export default AddProductInfoInputStep;
