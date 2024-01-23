import instance, { instanceNoToken } from './axios';

export interface getNickNameProps {
	nickname: string;
}

export const getNickName = async (nickname: getNickNameProps) => {
	try {
		const res = await instanceNoToken.get(
			`/users/check/nickname?nickname=${nickname}`,
		);
		return res.data;
	} catch (err) {
		console.error('이메일 중복 조회에 실패 했습니다.', err);
		throw new Error('이메일 중복 조회 실패');
	}
};
