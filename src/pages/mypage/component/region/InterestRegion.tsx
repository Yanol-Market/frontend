import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';

import BottomSheetRegionContent from '../content/BottomSheetRegionContent';
import { useRecoilValue } from 'recoil';
import { checkedListState } from '../../../../recoil/atom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postInterestRegion } from '../../../../apis/postInterestRegion';
import { getInterestRegions } from '../../../../apis/getInterestRegions';
import { convertRegionCode } from '../../../../utils/convertRegionCode';
import { getCookie, refreshCookie } from '../../../../apis/cookie';
import { Loading } from '../../../../component/common/Loading';
import Swal from 'sweetalert2';

interface WishRegionProps {
	id: number;
	region: string;
}
interface InterestRegionProps {
	status: string;
	message: null | string;
	data?: {
		wishRegions: WishRegionProps[];
	};
}
const InterestRegion = () => {
	const selectedList = useRecoilValue(checkedListState);
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

	const openBottomSheet = () => {
		setIsBottomSheetOpen(true);
	};

	const closeBottomSheet = () => {
		setIsBottomSheetOpen(false);
	};
	const mutation = useMutation({
		mutationFn: postInterestRegion,
		onSuccess() {
			Swal.fire({
				title: '관심지역 등록 성공',
				icon: 'success',
			});
			closeBottomSheet();
			window.location.reload();
		},
	});

	const { data, isLoading } = useQuery<InterestRegionProps>({
		queryKey: ['getInterestRegions'],
		queryFn: getInterestRegions,
	});
	const convertedWishRegions = data?.data?.wishRegions.map(
		(region: WishRegionProps) => {
			return {
				...region,
				region: convertRegionCode(region.region),
			};
		},
	);

	const handlePostRegions = () => {
		if (selectedList) {
			mutation.mutate({ regions: selectedList });
		}
	};
	return (
		<div>
			{isLoading && <Loading />}
			<Header title="관심 지역" />
			<div className="flex flex-col items-center">
				<BottomSheet
					isOpen={isBottomSheetOpen}
					onClose={closeBottomSheet}
					viewHeight="calc(100vh * 0.9)"
				>
					<BottomSheetRegionContent onClick={handlePostRegions} />
				</BottomSheet>
				<div className="w-[90%] mx-auto mt-11 font-body font-medium">
					<p>관심 지역을 설정해 두시면 알림을 보내드려요!</p>
					<p>관심지역은 3개까지 추가 가능합니다.</p>
				</div>
				<div
					className="w-[90%] flex flex-row justify-between rounded-lg bg-lightGray mx-auto mt-5 p-3 text-gray cursor-pointer"
					onClick={openBottomSheet}
				>
					<p>관심지역을 선택해주세요.</p>
					<img src="/assets/images/dropdownArrow.svg" alt="아래로 이동" />
				</div>
				{convertedWishRegions &&
					convertedWishRegions.map((region: WishRegionProps) => (
						<div
							key={region.id}
							className="w-[90%] h-12 bg-homeMain mt-5 rounded-xl p-3"
						>
							<p className="text-center">{region.region}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default InterestRegion;
