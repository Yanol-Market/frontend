import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import SystemMessage from './SystemMessage';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../recoil/atom';

export interface ChatItemType {
	chatId: number;
	content: string;
	createdAt: string;
	senderType: string;
	userId: string | number;
	viewed: boolean;
}

export interface ChatItemProps {
	chatList: ChatItemType[] | null;
	userId: string | number;
}

interface ChatMessageProps {
	chatItem: ChatItemType;
}

const ChatItem: React.FC<ChatItemProps> = ({ chatList }) => {
	const userId = useRecoilValue(userIdState);
	dayjs.extend(utc);
	dayjs.extend(timezone);
	return (
		<div>
			{chatList &&
				chatList.map((chatItem) => {
					if (chatItem.senderType !== 'SYSTEM') {
						return <ChatMessage key={chatItem.chatId} chatItem={chatItem} />;
					} else if (
						chatItem.senderType === 'SYSTEM' &&
						chatItem.userId === userId
					) {
						return <SystemMessage key={chatItem.chatId} chatItem={chatItem} />;
					}
				})}
		</div>
	);
};

const ChatMessage: React.FC<ChatMessageProps> = ({ chatItem }) => {
	const userId = useRecoilValue(userIdState);
	const isMe = chatItem.userId === userId;

	return (
		<div
			className={`flex items-end p-[20px] ${isMe ? 'flex-row-reverse' : ''}`}
		>
			{!isMe && (
				<img
					className="h-[36px] w-[36px]"
					src="/assets/images/profileImage.svg"
					alt="Profile"
				/>
			)}
			<p
				className={`text-lg mx-[10px] p-[10px] border-[1px] ${
					isMe
						? 'border-[#FFF3C5] bg-[#FFF3C5] rounded-t-[12px] rounded-bl-[12px]'
						: 'border-[#E5E5E5] bg-white rounded-t-[12px] rounded-br-[12px]'
				}`}
			>
				{chatItem.content}
			</p>
			<p className="text-sm">
				{dayjs(chatItem.createdAt).tz('Asia/Seoul').format('HH:mm')}
			</p>
		</div>
	);
};

export default ChatItem;
