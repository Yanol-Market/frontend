import instance from './axios';

interface PutNickNameProps {
	nickname: string;
}

export const putNickName = async (data: PutNickNameProps) => {
	try {
		const res = await instance.put('/users/me', data);
		return res.data;
	} catch (err) {
		console.error(err);
		throw new Error('닉네임 수정 실패');
	}
};
