import React from 'react';

interface Chat {
	id: number;
	hotelName: string;
	roomInfo: string;
	userId: string;
	lastMessageTime: string;
	lastMessage: string;
	profileImage?: string;
	type: string;
	unread?: boolean;
}

interface ChatListProps {
	chats: Chat[];
}

const ChatList = ({ chats }: ChatListProps) => {
	return (
		<div className="flex flex-col space-y-4 text-black">
			{chats.map((chat) => (
				<div
					key={chat.id}
					className={`py-1 flex items-center ${
						chat.unread ? '' : 'text-descGray'
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
								{chat.hotelName}({chat.roomInfo})
							</p>
							{chat.unread && (
								<div className="w-2 h-2 bg-red rounded-full ml-1" />
							)}
						</div>
						{/* 채팅을 주고 받는 사람의 아이디 */}
						<p className="mb-1">
							<span
								className={`font-semibold mr-[0.375rem] text-lg ${
									chat.unread ? 'text-black' : ''
								}`}
							>
								{chat.userId}
							</span>
							<span className={`text-sm text-descGray`}>
								{chat.lastMessageTime}
							</span>
						</p>
						{/* 마지막으로 온 채팅 메세지 */}
						<p
							className={`text-lg ${
								chat.unread ? 'font-semibold' : 'text-descGray'
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
