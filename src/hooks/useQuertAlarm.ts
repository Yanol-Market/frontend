import { getAlarm } from '../apis/alarm';
import { useQuery } from '@tanstack/react-query';

export const useQueryAlarm = () => {
	const { isLoading, error, data } = useQuery({
		queryKey: ['alarm'],
		queryFn: getAlarm,
		select: ({ data }) => data,
	});
	return {
		isLoading,
		error,
		data,
	};
};
