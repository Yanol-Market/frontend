import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getNewAlarm } from '../../../../apis/alarm';
import { patchAccounts } from '../../../../apis/patchAccounts';

type UserProfile = {
    nickname:string
}

export const HeaderInfo = () => {
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(false);
	const [alarm, setAlarm] = useState<boolean | null>(null);
    const [userProfile,setUserProfile] = useState<UserProfile>();
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
	useEffect(() => {
		if (localStorage.getItem('userProfileInfo')) {
            setUserProfile(JSON.parse(
				localStorage.getItem('userProfileInfo') as string,
			).data)
			setIsLogin(true);
            console.log(userProfile)
		}
		return () => {
			setIsLogin(false);
		};
	}, []);

	return (
		<div className="flex justify-between pt-9">
			<Link to={'/'}>
				<img src={'/assets/images/homeMainLogo.svg'} alt="mainLogo" />
			</Link>
			<div className="flex justify-between w-40">
				<div className="flex">
					{userProfile && (
						<div className="flex">
							<p className="font-pre font-[600] text-lg">{`${userProfile.nickname}`}</p>
							<p className="font-pre font-medium text-lg">{`님, `}</p>
						</div>
					)}

					<p className="font-pre font-medium text-lg">반갑습니다!</p>
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
