import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../apis/home';
import { getPurchases } from '../apis/purchases';

// export const useQueryPurchases = () => {
// 	const { data, isLoading } = useQuery('getProducts', getPurchases);
// 	return { data, isLoading };
// };
