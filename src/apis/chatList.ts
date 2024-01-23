import instance from './axios';

export const getChatList = async (userType: string) => {
	try {
		const response = await instance.get(`/chats?userType=${userType}`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw new Error('채팅방 목록 조회 실패');
	}
};
