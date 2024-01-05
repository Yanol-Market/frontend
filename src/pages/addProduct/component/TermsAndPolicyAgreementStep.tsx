// TermsAndPolicyAgreementStep.js
import React from 'react';

interface Props {
	onPrevStep: () => void;
	onComplete: () => void;
}

const TermsAndPolicyAgreementStep = ({ onPrevStep, onComplete }: Props) => {
	// 필요한 로직 및 상태 관리

	return (
		<div>
			<h2>약관 및 정책 동의</h2>
			{/* 약관 동의 관련 컴포넌트 및 로직 */}
			<button onClick={onPrevStep}>이전 단계</button>
			<button onClick={onComplete}>등록 완료</button>
		</div>
	);
};

export default TermsAndPolicyAgreementStep;
