import React from 'react';
import { Header } from '../../../../component/common/Header';

interface NotFoundContentProps {
	title: string;
	content: string;
}
const NotFoundContent = ({ title, content }: NotFoundContentProps) => {
	return (
		<>
			<Header title={title} />
			<div className="flex flex-col h-screen items-center justify-center">
				<div className="">
					<p className="text-body text-descGray">{content}</p>
				</div>
			</div>
		</>
	);
};

export default NotFoundContent;
