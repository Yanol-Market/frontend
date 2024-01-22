import instance from './axios';

interface ChatRoom {
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage?: string | null;
	accommodationName: string;
	roomName: string;
	lastMessage: string;
	lastMessageCreatedAt: string;
	viewed?: boolean;
	type?: string;
}

interface ChatResponse {
	status: string;
	message: string;
	data: {
		chatRoomShortList: ChatRoom[];
	};
}

export const getChatList = async (userType: string): Promise<ChatResponse> => {
	try {
		const response = await instance.get(`/chats?userType=${userType}`);

		return response.data;
	} catch (error) {
		console.error(error);
		throw new Error('채팅방 목록 조회 실패');
	}
};
