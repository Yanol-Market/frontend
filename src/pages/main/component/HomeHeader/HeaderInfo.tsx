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
			<Link to={'/main'}>
				<img src={'/assets/images/homeMainLogo.svg'} alt="mainLogo" />
			</Link>
			<div className="flex justify-between w-40">
				<div className="flex">
					<p className="font-pre font-semibold text-lg">홍길동</p>
					<p className="font-pre font-medium text-lg">님, 반갑습니다!</p>
				</div>
				<button className="" onClick={handleClick}>
					{alarm ? (
						<img src="/assets/images/bell_on.svg" alt="" />
					) : (
						<img src="/assets/images/buttonAlram.svg" alt="" />
					)}
				</button>
			</div>
		</div>
	);
};
