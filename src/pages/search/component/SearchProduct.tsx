import { BorderColor, BorderColorOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
	{ label: '전체', value: 0 },
	{ label: '서울', value: 1 },
	{ label: '경기', value: 2 },
	{ label: '인천', value: 3 },
	{ label: '강원', value: 4 },
	{ label: '대전', value: 5 },
	{ label: '충북', value: 6 },
	{ label: '충남/세종', value: 7 },
	{ label: '부산', value: 8 },
	{ label: '울산', value: 9 },
	{ label: '경남', value: 10 },
	{ label: '대구', value: 11 },
	{ label: '경북', value: 12 },
	{ label: '광주', value: 13 },
	{ label: '전남', value: 14 },
	{ label: '전주/전북', value: 15 },
];

export const SearchProduct = () => {
	const [selectedOption, setSelectedOption] = useState({
		label: '전체',
		value: 0,
	});

	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleChange = (selectedOption: any) => {
		setSelectedOption(selectedOption);
	};

	const customStyles = {
		control: (provided: any) => ({
			...provided,
			width: '90px',
			height: '30px',
			fontFamily: 'pretendard',
			border: 'none',
			backgroundColor: 'inherit',
			fontSize: '14px',
			color: 'blue',

			// borderColor: 'none', // 원하는 outline 색상으로 변경
		}),
		option: (provided: any, state: any) => ({
			...provided,
			color: 'descGray',
			fontSize: '14px',
		}),
	};
	return (
		<div className="flex relative w-[335px] h-[45px] bg-lightGray rounded-[12px] px-[15px] py-2">
			<div className="relative bottom-1">
				<Select
					defaultValue={selectedOption}
					styles={customStyles}
					onChange={handleChange}
					options={options}
					// value={selectedOption}
				/>
			</div>
			<input
				value={inputValue}
				onChange={handleInputValue}
				className="bg-inherit text-descGray outline-none text-lg placeholder:text-descGray w-full"
				placeholder="국내 숙소명 또는 지역명"
			/>
		</div>
	);
};
