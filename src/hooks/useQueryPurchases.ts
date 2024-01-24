import { useQuery } from '@tanstack/react-query';
import { getBoughtDetailList, getPurchases } from '../apis/purchases';
import { getBoughtList } from '../apis/purchases';

// 구매내역 - 구매중
export const useQueryPurchases = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['purchases'],
		queryFn: getPurchases,
		select: ({ data }) => data,
	});
	return { isLoading, error, data };
};

// 구매내역 - 구매완료 - 리스트
export const useQueryBoughtList = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['BoughtList'],
		queryFn: getBoughtList,
		select: ({ data }) => data,
	});
	return {
		isLoading,
		error,
		data,
	};
};

// // 구매내역 - 구매완료 - 상세
export const useQueryBoughtDetail = (orderId: string) => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['BoughtDetail'],
		queryFn: () => getBoughtDetailList(orderId),
		select: ({ data }) => data,
	});
	return {
		isLoading,
		error,
		data,
	};
};
