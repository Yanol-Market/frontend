import React from 'react';

const Splash = () => {
	return (
		<div className="flex flex-col justify-center h-screen bg-gradient-to-b from-gradientStart to-main">
			<img
				className="w-24 h-24 mx-auto"
				src="/assets/images/splashLogo.svg"
				alt="스플래시 로고"
			/>
		</div>
	);
};

export default Splash;
