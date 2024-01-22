<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderInfo = () => {
	return (
		<div className="flex justify-between pt-9">
			<Link to={'/main'}>
=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getNewAlarm } from '../../../../apis/alarm';

export const HeaderInfo = () => {
	const navigate = useNavigate();
	const [alarm, setAlarm] = useState<boolean | null>(null);

	const handleClick = () => {
		navigate('/alarm');
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getNewAlarm();
				setAlarm(res.data.existsNewAlert);
			} catch (e) {
				console.log('에러에러', e);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="flex justify-between pt-9">
			<Link to={'/'}>
>>>>>>> 207dd9fcaf906b6d4d569fd2245454baabbee75c
				<img src={'/assets/images/homeMainLogo.svg'} alt="mainLogo" />
			</Link>
			<div className="flex justify-between w-40">
				<div className="flex">
					<p className="font-pre font-semibold text-lg">홍길동</p>
					<p className="font-pre font-medium text-lg">님, 반갑습니다!</p>
				</div>
<<<<<<< HEAD
				<button className="">
					<img src="/assets/images/buttonAlram.svg" alt="" />
=======
				<button className="" onClick={handleClick}>
					{alarm ? (
						<img src="/assets/images/bell_on.svg" alt="" />
					) : (
						<img src="/assets/images/buttonAlram.svg" alt="" />
					)}
>>>>>>> 207dd9fcaf906b6d4d569fd2245454baabbee75c
				</button>
			</div>
		</div>
	);
};
