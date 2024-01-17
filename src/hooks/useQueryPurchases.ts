import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getPurchases } from '../apis/purchases';
import { getBoughtList } from '../apis/purchases';

// 구매내역 - 구매중
export const useQueryPurchases = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['purchases'],
		queryFn: getPurchases,
	});
	return { isLoading, error, data };
};

// 구매내역 - 구매완료 - 리스트
export const useQueryBoughtList = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['purchases'],
		queryFn: getBoughtList,
		select: ({ data }) => data,
	});
	return {
		isLoading,
		error,
		data,
	};
};
