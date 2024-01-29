import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getNewAlarm } from '../../../../apis/alarm';
import { useQueries } from '@tanstack/react-query';
import { getProfiles } from '../../../../apis/getProfile';
import { getAccounts } from '../../../../apis/getAccounts';
import { getCookie } from '../../../../apis/cookie';

export const HeaderInfo = () => {
	const accessToken = getCookie('accessToken');
	const results = useQueries({
		queries: [
			{
				queryKey: ['getMyProfile'],
				queryFn: getProfiles,
				enabled: !!accessToken,
			},
			{
				queryKey: ['getAccounts'],
				queryFn: getAccounts,
				enabled: !!accessToken,
			},
		],
	});
	const navigate = useNavigate();
	const myProfileData = results[0].data;
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
				// console.log('에러에러', e);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="flex justify-between pt-9">
			<Link to={'/'}>
				<img src={'/assets/images/homeMainLogo.svg'} alt="mainLogo" />
			</Link>
			<div className="flex justify-end ">
				<div className="flex ">
					{myProfileData && (
						<div className="flex">
							<p className="font-pre font-[600] text-lg">{`${myProfileData.data.nickname}`}</p>
							<p className="font-pre font-medium text-lg">{`님, `}</p>
						</div>
					)}

					<p className="font-pre font-medium text-lg mr-5">반갑습니다!</p>
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
