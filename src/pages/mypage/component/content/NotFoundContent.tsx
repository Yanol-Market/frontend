import React from 'react';
import { Header } from '../../../../component/common/Header';

interface NotFoundContentProps {
	title: string;
	content: string;
	children?: React.ReactNode;
}
const NotFoundContent = ({
	title,
	content,
	children,
}: NotFoundContentProps) => {
	return (
		<>
			<Header title={title} />
			<div className="flex flex-col items-center">
				<p className="text-body text-descGray text-center mt-72">{content}</p>
				{children}
			</div>
		</>
	);
};

export default NotFoundContent;
