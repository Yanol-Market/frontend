import instance from './axios';
interface PatchPasswordProps {
	originPassword: string;
	changePassword: string;
}
export const patchPassword = async (data: PatchPasswordProps) => {
	try {
		const res = await instance.patch('/users/password', data);
		return res.data;
	} catch (err) {
		console.error(err);
		throw new Error('비밀번호 변경 실패');
	}
};
