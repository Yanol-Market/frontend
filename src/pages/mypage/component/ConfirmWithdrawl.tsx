import React from 'react';

const ConfirmWithdrawl = () => {
	return (
		<div className="h-[100vh] flex flex-col items-center">
			<div className="w-[375px] h-[70px] text-center pt-5 font-medium">
				회원탈퇴
			</div>
			<div className="flex flex-col items-center justify-center h-[80vh]">
				<span>회원탈퇴가 완료 되었습니다.</span>
				<span>더욱 좋은 서비스로 다시 뵙도록 노력하겠습니다.</span>
			</div>
			<button
				type="button"
				className="flex items-center w-[90%] h-11 rounded-xl text-center text-m bg-main text-white"
			>
				<span className="mx-auto">홈으로</span>
			</button>
		</div>
	);
};

export default ConfirmWithdrawl;
