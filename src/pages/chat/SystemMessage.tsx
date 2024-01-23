import React from 'react';
import { ChatItemType } from './Chat.page';

type SystemMessageProps = {
	chatItem: ChatItemType;
};

const SystemMessage: React.FC<SystemMessageProps> = ({ chatItem }) => {
	if (chatItem.senderType !== 'SYSTEM') {
		return null;
	}

	return (
		<div className="flex justify-center items-center p-[10px]">
			<p className="text-m text-center w-[240px]">{chatItem.content}</p>
		</div>
	);
};

export default SystemMessage;
