import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { checkedState } from '../../../recoil/atom';
import { styled } from 'styled-components';

export const WishPriceContent = () => {
	const [checkedItem, setCheckedItem] = useRecoilState(checkedState);
	const handleCheckboxChange = (value: string) => {
		if (checkedItem === value) {
			setCheckedItem('FULL_RANGE');
			return;
		}
		setCheckedItem(value);
	};
	return (
		<div>
			<p className='text-fontBlack text-m mb-2'>희망 1박당 금액대</p>
			<div className="flex gap-[7px]">
				<label
					className={`p-2 text-m rounded-[20px] cursor-pointer ${
						checkedItem === 'UNDER_10'
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					~10만원대
					<HiddenCheckBox
						className="hidden-checkbox"
						type="checkbox"
						value={'UNDER_10'}
						checked={checkedItem === 'UNDER_10'}
						onChange={() => {
							handleCheckboxChange('UNDER_10');
						}}
					/>
				</label>
				<label
					className={`p-2 text-m rounded-[20px] cursor-pointer ${
						checkedItem === 'BETWEEN_10_AND_20'
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					20만원대
					<HiddenCheckBox
						type="checkbox"
						value={'BETWEEN_10_AND_20'}
						checked={checkedItem === 'BETWEEN_10_AND_20'}
						onChange={() => {
							handleCheckboxChange('BETWEEN_10_AND_20');
						}}
					/>
				</label>
				<label
					className={`p-2 text-m rounded-[20px] cursor-pointer ${
						checkedItem === 'BETWEEN_30_AND_40'
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					30~40만원대
					<HiddenCheckBox
						type="checkbox"
						value={'BETWEEN_30_AND_40'}
						checked={checkedItem === 'BETWEEN_30_AND_40'}
						onChange={() => {
							handleCheckboxChange('BETWEEN_30_AND_40');
						}}
					/>
				</label>
				<label
					className={`p-2 text-m rounded-[20px] cursor-pointer ${
						checkedItem === 'ABOVE_50'
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					50만원대~
					<HiddenCheckBox
						type="checkbox"
						value={'ABOVE_50'}
						checked={checkedItem === 'ABOVE_50'}
						onChange={() => {
							handleCheckboxChange('ABOVE_50');
						}}
					/>
				</label>
			</div>
		</div>
	);
};

const HiddenCheckBox = styled.input`
	display: none;
`;
