import React from 'react';

type ChatItemType = {
	userId: boolean;
	id: number;
	message: string;
	timestamp: Date;
	messageType: string;
};

type SystemMessageProps = {
	chatItem: ChatItemType;
};

const SystemMessage: React.FC<SystemMessageProps> = ({ chatItem }) => {
	if (chatItem.messageType !== 'system' || chatItem.userId) {
		return null;
	}

	return (
		<div className="flex justify-center items-center p-[10px]">
			<p className="text-m text-center w-[240px]">{chatItem.message}</p>
		</div>
	);
};

export default SystemMessage;
