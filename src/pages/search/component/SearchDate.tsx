import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import moment, { Moment } from 'moment';
import { useRecoilState } from 'recoil';
import { startState } from '../../../recoil/atom';
import { endState } from '../../../recoil/atom';

const formatDate = (date: Date) => {
	const day = moment(date).format(`YYYY.MM.DD`);
	const enDaysWeek = moment(date).format('dddd');
	let koDaysWeek = '';
	switch (enDaysWeek) {
		case 'Monday':
			koDaysWeek = '월';
			break;
		case 'TuesDay':
			koDaysWeek = '화';
			break;
		case 'Wednesday':
			koDaysWeek = '수';
			break;
		case 'Thursday':
			koDaysWeek = '목';
			break;
		case 'Friday':
			koDaysWeek = '금';
			break;
		case 'Saturday':
			koDaysWeek = '토';
			break;
		case 'Sunday':
			koDaysWeek = '일';
			break;
	}
	const formatDate = `${day}(${koDaysWeek})`;
	return formatDate;
};

const createDefaultDate = () => {
	const startDate = new Date();
	const endDate = new Date();
	endDate.setDate(startDate.getDate() + 7);
	const startFormatDate = formatDate(startDate);
	const endFormatDate = formatDate(endDate);
	const defaultDate = `${startFormatDate} ~ ${endFormatDate}, ${6}박`;
	return defaultDate;
};

export const SearchDate = () => {
	const [startDate, setStartDate] = useRecoilState(startState);
	const [endDate, setEndDate] = useRecoilState(endState);
	const [dateValue, setDateValue] = useState(createDefaultDate());

	const handleDateChange = async (date: Date[], event: any) => {
		console.log(date)
		let startFormatDate = formatDate(startDate);
		let endFormatDate = formatDate(endDate);
		const dayDiff = moment(date[1]).diff(date[0], 'days');
		setStartDate(() => {
			startFormatDate = formatDate(date[0]);
			return date[0];
		});

		setEndDate(() => {
			endFormatDate = formatDate(date[1]);
			console.log(startFormatDate)
			return date[1];
		});
		setIsShow(false);
		setDateValue(`${startFormatDate} ~ ${endFormatDate}, ${dayDiff}박`);
		event.stopPropagation();
	};

	const [isShow, setIsShow] = useState(false);
	const handleChange = (event: any) => {
		setDateValue(event.target.value);
	};
	const tileDisabled = ({ date }: { date: Date }) => {
		if (date.toDateString() === new Date().toDateString()) {
			return true;
		}

		return date < new Date();
	};
	return (
		<div
			onClick={() => {
				setIsShow(true);
			}}
			className="flex relative w-[335px] h-[45px] bg-lightGray rounded-[12px] px-[15px] py-2"
		>
			<img
				className="w-[12px] y-[12px] mr-[15px] relative bottom-1"
				src="assets/images/calanderGray.svg"
				alt="calandar"
			/>
			<div className="relative w-full">
				<input
					className="bg-inherit text-descGray outline-none text-lg w-full"
					readOnly
					value={dateValue}
					onChange={handleChange}
				/>
				<div className="absolute w-[300px]">
					{isShow && (
						<StyledCalendar
							tileDisabled={tileDisabled}
							formatDay={(locale, date) => moment(date).format('DD')}
							onChange={(value, e) => {
								handleDateChange(value as Date[], e);
							}}
							selectRange
							value={[startDate, endDate]}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export const StyledCalendar = styled(Calendar)`
	.react-calendar {
		width: 200px;
	}
	.react-calendar__tile--active:enabled:hover,
	.react-calendar__tile--active:enabled:focus {
		background-color: #ffcc00;
	}
	/* 캘린더 전체에 적용할 스타일 */
	/* background-color: #f0f0f0; */
	.react-calendar--selectRange,
	.react-calendar__tile--hover {
		background-color: #ffcc00;
	}
	color: #222222;

	.react-calendar__tile--active {
		background-color: #ffcc00;
	}
	/* 현재 날짜 타일에 적용할 스타일 */
	.react-calendar__tile--now {
		background-color: inherit;
	}
	.react-calendar__tile:enabled:hover {
		background-color: #ffcc00;
	}
`;
