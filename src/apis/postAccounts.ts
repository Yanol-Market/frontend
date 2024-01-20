import instance from './axios';

interface PostAccountsProps {
	bankName: string;
	accountNumber: string;
}
export const postAccounts = async (data: PostAccountsProps) => {
	try {
		const res = await instance.patch('/users/account', data);
		return res.data;
	} catch (err) {
		console.error(err);
		throw new Error('계좌 등록 실패');
	}
};
