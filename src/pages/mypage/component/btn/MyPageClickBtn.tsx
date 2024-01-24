import React from 'react';

export interface MyPageClickBtnProps {
	content: string;
	onClick?: () => void;
	isDisabled?: boolean | undefined;
}

const MyPageClickBtn = ({
	content,
	onClick,
	isDisabled,
}: MyPageClickBtnProps) => {
	return (
		<div className="w-[340px] fixed bottom-11">
			<button
				type="button"
				className={`${
					isDisabled
						? 'border-borderGray bg-borderGray'
						: 'border-borderGray bg-main text-white'
				} flex items-center text-center mx-auto w-full h-11 rounded-xl text-gray text-m`}
				onClick={onClick}
				disabled={isDisabled}
			>
				<p className="text-center mx-auto text-white">{content}</p>
			</button>
		</div>
	);
};

export default MyPageClickBtn;
