import React from 'react';

const SignOutContent = () => {
	return (
		<div className="items-center mt-11 text-center">
			<p className="text-body">로그아웃 하시겠습니까?</p>
			<div className="flex flex-row gap-2 mt-11">
				<button className="bg-borderGray w-40 h-11 rounded-xl text-white">
					아니오
				</button>
				<button className="bg-main w-40 h-11 rounded-xl text-white">네</button>
			</div>
		</div>
	);
};

export default SignOutContent;
