import instance from './axios';
export interface PostInterestRegionProps {
	regions: string[];
}
export const postInterestRegion = async (data: PostInterestRegionProps) => {
	try {
		const res = await instance.post('/users/regions', data);
		return res.data;
	} catch (err) {
		console.error(err);
		throw new Error('관심지역 등록 실패');
	}
};
