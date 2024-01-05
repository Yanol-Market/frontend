import React, { useState } from 'react';
import { Header } from '../../../component/common/Header';
import BottomSheet from '../../../component/common/BottomSheet/BottomSheet';
import BottomSheetRegionContent from './BottomSheetRegionContent';

const InterestRegion = () => {
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

	const openBottomSheet = () => {
		setIsBottomSheetOpen(true);
	};

	const closeBottomSheet = () => {
		setIsBottomSheetOpen(false);
	};
	return (
		<div>
			<Header title="관심 지역" />
			<div className="flex flex-col items-center h-[100vh]">
				<BottomSheet
					isOpen={isBottomSheetOpen}
					onClose={closeBottomSheet}
					viewHeight="calc(100vh * 0.7)"
				>
					<BottomSheetRegionContent />
				</BottomSheet>
				<div className="w-[90%] mx-auto mt-11 font-body font-medium">
					<p>관심 지역을 설정해 두시면 알림을 보내드려요!</p>
					<p>관심지역은 3개까지 추가 가능합니다.</p>
				</div>
				<div
					className="w-[90%] flex flex-row justify-between rounded-lg bg-lightGray mx-auto mt-5 p-3 text-gray"
					onClick={openBottomSheet}
				>
					<p>관심지역을 선택해주세요.</p>
					<img src="/assets/images/bottomArrow.svg" alt="아래로 이동" />
				</div>
			</div>
		</div>
	);
};

export default InterestRegion;
