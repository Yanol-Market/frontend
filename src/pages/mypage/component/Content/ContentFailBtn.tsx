import React from 'react';

interface ContentFailBtnProps {
	title: string;
	btn: string;
	btnFunc: () => void;
}
const ContentFailBtn = ({ title, btn, btnFunc }: ContentFailBtnProps) => {
	return (
		<div className="items-center mt-11 text-center">
			<p className="text-body">{title}</p>

			<button
				className="bg-main w-full h-11 rounded-xl text-white mt-11 cursor-pointer"
				onClick={btnFunc}
			>
				{btn}
			</button>
		</div>
	);
};

export default ContentFailBtn;
