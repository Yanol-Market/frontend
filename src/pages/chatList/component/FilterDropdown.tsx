import React, { useState } from 'react';
import BottomSheet from '../../../component/common/BottomSheet/BottomSheet';

interface Option {
	value: string;
	label: string;
}

interface FilterDropdownProps {
	filterOptions: Option[];
	selectedFilter: string;
	onFilterChange: (value: string) => void;
}

const FilterDropdown = ({
	filterOptions,
	selectedFilter,
	onFilterChange,
}: FilterDropdownProps) => {
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

	const handleFilterChange = (value: string) => {
		onFilterChange(value);
		closeDropdown();
	};

	const openDropdown = () => {
		setIsBottomSheetOpen(true);
	};

	const closeDropdown = () => {
		setIsBottomSheetOpen(false);
	};

	const selectedLabel = filterOptions.find(
		(option) => option.value === selectedFilter,
	)?.label;

	return (
		<div className="mb-4">
			<button className="focus:outline-none" onClick={openDropdown}>
				<div className="flex items-center">
					<div className="p-2 focus:outline-none text-body font-semibold">
						{selectedLabel}
					</div>
					<img
						className="w-4"
						src="./assets/images/bottomArrow.svg"
						alt="Default Profile"
					/>
				</div>
			</button>
			<BottomSheet
				isOpen={isBottomSheetOpen}
				onClose={closeDropdown}
				viewHeight="calc(100vh * 0.35)"
			>
				<div className="flex flex-col items-center space-y-2 cursor-pointer text-headline3 pt-5">
					{/* 드롭다운 내용 */}
					{filterOptions.map((option) => (
						<div
							className={`p-2 ${
								option.value === selectedFilter
									? 'text-black font-semibold'
									: 'text-descGray'
							}`}
							key={option.value}
							onClick={() => handleFilterChange(option.value)}
						>
							{option.label}
						</div>
					))}
				</div>
			</BottomSheet>
		</div>
	);
};

export default FilterDropdown;
