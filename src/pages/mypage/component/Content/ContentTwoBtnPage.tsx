import React from 'react';

interface ContentTwoBtnProps {
	title: string;
	leftBtn: string;
	rightBtn: string;
	leftBtnFunc: () => void;
	rightBtnFunc: () => void;
}
const ContentTwoBtnPage = ({
	title,
	leftBtn,
	rightBtn,
	leftBtnFunc,
	rightBtnFunc,
}: ContentTwoBtnProps) => {
	return (
		<div className="items-center mt-11 text-center">
			<p className="text-body">{title}</p>
			<div className="flex flex-row gap-2 mt-11">
				<button
					className="bg-borderGray w-40 h-11 rounded-xl text-white"
					onClick={leftBtnFunc}
				>
					{leftBtn}
				</button>
				<button
					className="bg-main w-40 h-11 rounded-xl text-white"
					onClick={rightBtnFunc}
				>
					{rightBtn}
				</button>
			</div>
		</div>
	);
};

export default ContentTwoBtnPage;
