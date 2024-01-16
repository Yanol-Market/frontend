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
			<div className="flex flex-col items-center">
				<p className="text-body text-descGray text-center mt-72">{content}</p>
			</div>
		</>
	);
};

export default NotFoundContent;
