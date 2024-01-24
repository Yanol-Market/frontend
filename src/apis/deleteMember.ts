import instance from './axios';

interface DeleteMemberProps {
	reason: string | null;
}
export const deleteMember = async (data: DeleteMemberProps) => {
	try {
		const res = await instance.delete('/users', {
			data: data,
		});
	} catch (err) {
		console.error(err);
		throw new Error('회원 탈퇴 실패');
	}
};
