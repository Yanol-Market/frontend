import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useRecoilState } from 'recoil';
import { searchInputState, selectOptionState } from '../../../recoil/atom';

const options = [
	{ label: '전체', value: 0 },
	{ label: '서울', value: 1 },
	{ label: '경기', value: 2 },
	{ label: '인천', value: 3 },
	{ label: '강원', value: 4 },
	{ label: '제주', value: 5 },
	{ label: '대전', value: 6 },
	{ label: '충북', value: 7 },
	{ label: '충남/세종', value: 8 },
	{ label: '부산', value: 9 },
	{ label: '울산', value: 10 },
	{ label: '경남', value: 11 },
	{ label: '대구', value: 12 },
	{ label: '경북', value: 13 },
	{ label: '광주', value: 14 },
	{ label: '전남', value: 15 },
	{ label: '전주/전북', value: 16 },
];

export const SearchProduct = () => {
	const [SelectOptionString, setSelectOptionString] =
		useRecoilState(selectOptionState);

	useRecoilState(selectOptionState);
	const [selectedOption, setSelectedOption] = useState({
		label: '전체',
		value: 0,
	});

	const [inputValue, setInputValue] = useRecoilState(searchInputState);
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
		option: (provided: any) => ({
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
					onChange={(value) => {
						handleChange(value);
						if (value?.value) {
							const selectString = formatSelectString(value.value);
							setSelectOptionString(selectString as string);
						}
					}}
					options={options}
				/>
			</div>
			<input
				value={inputValue}
				onChange={handleInputValue}
				className="bg-inherit text-descGray outline-none text-lg placeholder:text-descGray w-full"
				placeholder="숙소명을 입력하세요"
			/>
		</div>
	);
};

const formatSelectString = (numberValue: number) => {
	let stringValue;
	switch (numberValue) {
		case 0: {
			stringValue = 'ALL';
			break;
		}
		case 1: {
			stringValue = 'SEOUL';
			break;
		}
		case 2: {
			stringValue = 'GYEONGGI';
			break;
		}
		case 3: {
			stringValue = 'INCHEON';
			break;
		}
		case 4: {
			stringValue = 'GANGWON';
			break;
		}
		case 5: {
			stringValue = 'JEJU';
			break;
		}
		case 6: {
			stringValue = 'DAEJEON';
			break;
		}
		case 7: {
			stringValue = 'CHUNGBUK';
			break;
		}
		case 8: {
			stringValue = 'CHUNGNAM';
			break;
		}
		case 9: {
			stringValue = 'BUSAN';
			break;
		}
		case 10: {
			stringValue = 'ULSAN';
			break;
		}
		case 11: {
			stringValue = 'GYEONGNAM';
			break;
		}
		case 12: {
			stringValue = 'DAEGU';
			break;
		}
		case 13: {
			stringValue = 'GYEONGBUK';
			break;
		}
		case 14: {
			stringValue = 'GWANGJU';
			break;
		}
		case 15: {
			stringValue = 'JEONNAM';
			break;
		}
		case 16: {
			stringValue = 'JEONBUK';
			break;
		}
	}
	return stringValue;
};
