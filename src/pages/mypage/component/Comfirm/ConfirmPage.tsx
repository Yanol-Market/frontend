import React from 'react';
import { Link } from 'react-router-dom';

interface ComfirmProps {
	title: string;
	content: string;
	btnContent: string;
	link: string;
}
const ConfirmPage = ({ title, content, btnContent, link }: ComfirmProps) => {
	return (
		<div className="h-screen flex flex-col items-center">
			<div className="w-[375px] h-[70px] text-center pt-5 font-medium">
				{title}
			</div>
			<div className="flex flex-col items-center justify-center h-[80vh]">
				<span>{content}</span>
			</div>
			<Link
				className="flex items-center w-[90%] h-11 rounded-xl text-center text-m bg-main text-white cursor-pointer"
				to={link}
			>
				<button type="button" className="mx-auto">
					<span className="text-center">{btnContent}</span>
				</button>
			</Link>
		</div>
	);
};

export default ConfirmPage;
