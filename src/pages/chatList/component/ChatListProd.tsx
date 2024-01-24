import React from 'react';
import { formatTimeAgo } from '../../../utils/formate';

export interface Chat {
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage: string | null;
	accommodationName: string;
	roomName: string;
	lastMessage: string;
	lastMessageCreatedAt: string;
	viewed?: boolean;
}

interface ChatListProps {
	chatRoomShortList: Chat[];
	userType: string;
}

const ChatListProd = ({ chatRoomShortList, userType }: ChatListProps) => {
	return (
		<div className="flex flex-col space-y-4 text-black mx-5">
			{chatRoomShortList.length === 0 ? (
				<p className="text-center text-lg mt-[13rem] text-descGray">
					{`${
						userType === 'all'
							? '나의'
							: userType === 'seller'
								? '판매'
								: '구매'
					} 거래 내역이 없습니다.`}
				</p>
			) : (
				chatRoomShortList.map((chatRoomShortList) => (
					<div
						key={chatRoomShortList.chatRoomId}
						className={`py-1 flex items-center ${
							chatRoomShortList.viewed ? 'text-descGray' : ''
						}`}
					>
						<img
							className="w-14 mr-6"
							src="./assets/images/profileImage.svg"
							alt="Default Profile"
						/>
						<div className="flex flex-col">
							{/* 빨간색 작은 원 */}

							{/* 호텔 이름 */}
							<div className="relative flex items-center">
								<p className="text-sm">
									{chatRoomShortList.accommodationName}(
									{chatRoomShortList.roomName})
								</p>
								{chatRoomShortList.viewed || (
									<div className="w-2 h-2 bg-red rounded-full ml-1" />
								)}
							</div>
							{/* 채팅을 주고 받는 사람의 아이디 */}
							<p className="mb-1">
								<span
									className={`font-semibold mr-[0.375rem] text-lg ${
										chatRoomShortList.viewed ? '' : 'text-black'
									}`}
								>
									{chatRoomShortList.receiverNickname}
								</span>
								<span className={`text-sm text-descGray`}>
									{formatTimeAgo(chatRoomShortList.lastMessageCreatedAt)}
								</span>
							</p>
							{/* 마지막으로 온 채팅 메세지 */}
							<p
								className={`text-lg ${
									chatRoomShortList.viewed ? 'text-descGray' : 'font-semibold'
								}`}
								style={{
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									maxWidth: '260px',
								}}
							>
								{chatRoomShortList.lastMessage}
							</p>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default ChatListProd;
