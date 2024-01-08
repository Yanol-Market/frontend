import React from 'react';

const BottomSheetRegionContent = () => {
	return (
		<div className="flex flex-col justify-center">
			<p className="text-center mb-7">관심지역 선택</p>
			<div>
				<div className="flex flex-row justify-between">
					<p>서울</p>
					<img
						className="cursor-pointer"
						src="/assets/images/plusRegion.svg"
						alt="plusRegion"
					/>
				</div>
				<div className="flex flex-row justify-between mt-5">
					<p>경기</p>
					<img
						className="cursor-pointer"
						src="/assets/images/removeRegion.svg"
						alt="plusRegion"
					/>
				</div>
			</div>
		</div>
	);
};

export default BottomSheetRegionContent;
