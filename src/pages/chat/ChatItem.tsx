import React from 'react';
import dayjs from 'dayjs';
import SystemMessage from './SystemMessage';

const ChatItem: React.FC<ChatItemProps> = ({ chatList }) => {
	return (
		<div>
			{chatList.map((chatItem) =>
				chatItem.messageType === 'system' ? (
					<SystemMessage key={chatItem.id} chatItem={chatItem} />
				) : (
					<ChatMessage key={chatItem.id} chatItem={chatItem} />
				),
			)}
		</div>
	);
};

const ChatMessage: React.FC<{ chatItem: ChatItemType }> = ({ chatItem }) => {
	const isRecipient = chatItem.userId;
	console.log(isRecipient);

	return (
		<div
			key={chatItem.id}
			className={`flex items-end p-[20px] ${
				isRecipient ? '' : 'flex-row-reverse'
			}`}
		>
			{isRecipient && (
				<img
					className="h-[36px] w-[36px]"
					src="/assets/images/profileImage.svg"
					alt="Profile"
				/>
			)}
			<p
				className={`text-lg mx-[10px] p-[10px] border-[1px] ${
					isRecipient
						? 'border-[#E5E5E5] bg-white rounded-t-[12px] rounded-br-[12px]'
						: 'border-[#FFF3C5] bg-[#FFF3C5] rounded-t-[12px] rounded-bl-[12px]'
				}`}
			>
				{chatItem.message}
			</p>
			<p className="text-sm">{dayjs(chatItem.timestamp).format('HH:mm')}</p>
		</div>
	);
};

export default ChatItem;

interface ChatItemType {
	userId: boolean;
	id: number;
	message: string;
	timestamp: Date;
	messageType: string;
}

interface ChatItemProps {
	chatList: ChatItemType[];
}
