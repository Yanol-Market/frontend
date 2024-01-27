import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import moment, { Moment } from 'moment';
import { useRecoilState } from 'recoil';
import { dateRefState, isShowState, startState } from '../../../recoil/atom';
import { endState } from '../../../recoil/atom';

const formatDate = (date: Date) => {
	const day = moment(date).format(`YYYY.MM.DD`);
	const enDaysWeek = moment(date).format('dddd');
	let koDaysWeek = '';

	switch (enDaysWeek) {
		case 'Monday':
			koDaysWeek = '월';
			break;
		case 'Tuesday':
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

const createDate = (startDate: Date, endDate: Date) => {
	const startFormatDate = formatDate(startDate);
	const endFormatDate = formatDate(endDate);
	const dayDiff = moment(endDate).diff(startDate, 'days');
	const defaultDate = `${startFormatDate} ~ ${endFormatDate}, ${dayDiff}박`;
	return defaultDate;
};

export const SearchDate = () => {
	const [startDate, setStartDate] = useRecoilState(startState);
	const [endDate, setEndDate] = useRecoilState(endState);
	const [dateValue, setDateValue] = useState(createDate(startDate, endDate));
	const [dateRef, setDateRef] = useRecoilState(dateRefState);
	const dropMenuRef = useRef<HTMLDivElement | null>(null);
	const dateUseRef = useRef(null);
	const handleDateChange = async (date: Date[], event: any) => {
		let startFormatDate = formatDate(startDate);
		let endFormatDate = formatDate(endDate);
		const dayDiff = moment(date[1]).diff(date[0], 'days');
		setStartDate(() => {
			startFormatDate = formatDate(date[0]);
			return date[0];
		});

		setEndDate(() => {
			endFormatDate = formatDate(date[1]);
			return date[1];
		});
		setIsShow(false);
		setDateValue(`${startFormatDate} ~ ${endFormatDate}, ${dayDiff}박`);
		event.stopPropagation();
	};

	const [isShow, setIsShow] = useState(false);
	const handleChange = (event: any) => {
		setDateValue(event.target.value);
	};
	const tileDisabled = ({ date }: { date: Date }) => {
		// if (date.toDateString() === new Date().toDateString()) {
		// 	return true;
		// }
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0);
		date.setHours(0, 0, 0, 0);

		return date < currentDate;
	};

	useEffect(() => {
		const handleOutsideClose = (e: { target: any }) => {
			// useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
			if (isShow && !dropMenuRef?.current?.contains(e.target)) {
				setIsShow(false);
			}
			if (!isShow && dropMenuRef?.current?.contains(e.target)) {
				setIsShow(true);
			}
		};
		document.addEventListener('click', (e) => {
			handleOutsideClose(e);
		});

		return () => document.removeEventListener('click', handleOutsideClose);
	}, [isShow]);

	return (
		<div
			ref={dropMenuRef}
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
	.react-calendar__tile--hasActive {
		background-color: #ffcc00;
		color: white;
	}
	.react-calendar__tile--active {
		background-color: #ffcc00;
	}
	/* 현재 날짜 타일에 적용할 스타일 */
	.react-calendar__tile:enabled:hover {
		background-color: #ffcc00;
	}
	.react-calendar__tile--hasActive {
		background-color: #ffcc00;
		color: white;
	}
	.react-calendar__tile--now {
		background-color: white;
		color: #222222;
	}
	.react-calendar__tile--rangeStart {
		background-color: #ffcc00;
		color: white;
	}
`;
