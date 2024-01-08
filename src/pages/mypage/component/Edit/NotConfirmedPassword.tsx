import React from 'react';

const NotConfirmedPassword = () => {
	return (
		<div className="items-center mt-11 text-center">
			<p className="text-body">현재 비밀번호를 다시 확인해주세요.</p>

			<button className="bg-main w-full h-11 rounded-xl text-white mt-11 cursor-pointer">
				네
			</button>
		</div>
	);
};

export default NotConfirmedPassword;
