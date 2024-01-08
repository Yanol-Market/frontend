import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { checkedState } from '../../../recoil/atom';
import { styled } from 'styled-components';

export const WishPriceContent = () => {
	const [checkedItem, setCheckedItem] = useRecoilState(checkedState);
	const handleCheckboxChange = (value: number) => {
		if (checkedItem === value) {
			setCheckedItem(0);
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
						checkedItem === 1
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					~10만원대
					<HiddenCheckBox
						className="hidden-checkbox"
						type="checkbox"
						value={1}
						checked={checkedItem === 1}
						onChange={() => {
							handleCheckboxChange(1);
						}}
					/>
				</label>
				<label
					className={`p-2 text-m rounded-[20px] cursor-pointer ${
						checkedItem === 2
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					20만원대
					<HiddenCheckBox
						type="checkbox"
						value={2}
						checked={checkedItem === 2}
						onChange={() => {
							handleCheckboxChange(2);
						}}
					/>
				</label>
				<label
					className={`p-2 text-m rounded-[20px] cursor-pointer ${
						checkedItem === 3
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					30~40만원대
					<HiddenCheckBox
						type="checkbox"
						value={3}
						checked={checkedItem === 3}
						onChange={() => {
							handleCheckboxChange(3);
						}}
					/>
				</label>
				<label
					className={`p-2 text-m rounded-[20px] cursor-pointer ${
						checkedItem === 4
							? 'bg-homeMain text-fontBlack'
							: 'bg-borderWhite text-descGray'
					}`}
				>
					50만원대~
					<HiddenCheckBox
						type="checkbox"
						value={4}
						checked={checkedItem === 4}
						onChange={() => {
							handleCheckboxChange(4);
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
