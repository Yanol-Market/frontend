import React from 'react';
import { formatTimeAgo } from '../../../utils/formate';

interface Chat {
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage: string | null;
	accommodationName: string;
	roomName: string;
	lastMessage: string;
	lastMessageCreatedAt: string;
	viewed?: boolean;
	type: string;
}

interface ChatListProps {
	chats: Chat[];
}

const ChatList = ({ chats }: ChatListProps) => {
	return (
		<div className="flex flex-col space-y-4 text-black">
			{chats.map((chat) => (
				<div
					key={chat.chatRoomId}
					className={`py-1 flex items-center ${
						chat.viewed ? 'text-descGray' : ''
					}`}
				>
					<img
						className="w-14 mr-4"
						src="./assets/images/profileImage.svg"
						alt="Default Profile"
					/>
					<div className="flex flex-col">
						{/* 빨간색 작은 원 */}

						{/* 호텔 이름 */}
						<div className="relative flex items-center">
							<p className="text-sm">
								{chat.accommodationName}({chat.roomName})
							</p>
							{chat.viewed || (
								<div className="w-2 h-2 bg-red rounded-full ml-1" />
							)}
						</div>
						{/* 채팅을 주고 받는 사람의 아이디 */}
						<p className="mb-1">
							<span
								className={`font-semibold mr-[0.375rem] text-lg ${
									chat.viewed ? '' : 'text-black'
								}`}
							>
								{chat.receiverNickname}
							</span>
							<span className={`text-sm text-descGray`}>
								{formatTimeAgo(chat.lastMessageCreatedAt)}
							</span>
						</p>
						{/* 마지막으로 온 채팅 메세지 */}
						<p
							className={`text-lg ${
								chat.viewed ? 'text-descGray' : 'font-semibold'
							}`}
							style={{
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								maxWidth: '260px',
							}}
						>
							{chat.lastMessage}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ChatList;
