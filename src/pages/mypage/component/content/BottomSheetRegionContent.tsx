import React, { useCallback } from 'react';
import { regionData } from '../../../../data/regionData';
import { useRecoilState } from 'recoil';
import { checkedListState } from '../../../../recoil/atom';

interface BottomSheetRegionContentProps {
	onClick: () => void;
}
const BottomSheetRegionContent = ({
	onClick,
}: BottomSheetRegionContentProps) => {
	const [checkedList, setCheckedList] = useRecoilState(checkedListState);
	const onCheckedItem = useCallback(
		(item: string) => {
			if (checkedList.includes(item)) {
				setCheckedList((prev) => prev.filter((el) => el !== item));
			} else if (checkedList.length < 3) {
				setCheckedList((prev) => [...prev, item]);
			} else {
				console.log('3개 이상 추가할 수 없습니다');
			}
		},
		[checkedList, setCheckedList],
	);

	console.log(checkedList);
	return (
		<div className="flex flex-col justify-center">
			<p className="text-center mb-7">관심지역 선택</p>
			<div className="">
				{regionData &&
					regionData.map((regions) => (
						<div
							key={regions.id}
							className="flex flex-row justify-between mt-5 overflow-scroll scrollbar-hide"
						>
							<p className="cursor-default">{regions.region}</p>
							<input
								type="checkbox"
								id={regions.region}
								className=" appearance-none bg-selected w-5 h-5 mr-1 checked:bg-unselected cursor-pointer"
								checked={checkedList.includes(regions.region)}
								onChange={() => {
									onCheckedItem(regions.region);
								}}
							/>
						</div>
					))}
				<button
					type="button"
					className="flex items-center w-full h-11 rounded-xl bg-main mt-2 cursor-pointer"
					onClick={onClick}
				>
					<p className="text-m text-white mx-auto">확인</p>
				</button>
			</div>
		</div>
	);
};

export default BottomSheetRegionContent;
