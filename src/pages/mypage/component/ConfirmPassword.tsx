import React from 'react';

const ConfirmPassword = () => {
	return (
		<div className="h-[100vh] flex flex-col items-center">
			<div className="w-[375px] h-[70px] text-center pt-5 font-medium">
				비밀번호 변경
			</div>
			<div className="flex flex-col items-center justify-center h-[80vh]">
				<span>비밀번호가 변경되었습니다.</span>
			</div>
			<button
				type="button"
				className="flex items-center w-[90%] h-11 rounded-xl text-center text-m bg-main text-white"
			>
				<span className="mx-auto">확인</span>
			</button>
		</div>
	);
};

export default ConfirmPassword;
