import { useQuery } from '@tanstack/react-query';
import { getSales, getSoldList, getSoldDetail } from '../apis/sales';

// 판매내역 - 판매중
export const useQuerySales = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['Sales'],
		queryFn: getSales,
		select: ({ data }) => data,
	});
	return { isLoading, error, data };
};

// 판매내역 - 판매 완료 - 리스트
export const useQuerySoldList = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['soldList'],
		queryFn: getSoldList,
	});
	return { isLoading, error, data };
};

// 판매내역 - 판매 완료 - 상세
export const useQuerySoldDetail = (productId: string) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['SoldDetail'],
		queryFn: () => getSoldDetail(productId),
	});
	return { isLoading, error, data };
};
