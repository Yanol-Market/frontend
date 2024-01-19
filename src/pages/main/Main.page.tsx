import React, { useEffect } from 'react';
import { HomeHeader } from './component/HomeHeader/HomeHeader';
import { HomeContent } from './component/HomeContent';
import { getCookie } from '../../apis/cookie';
import { useQueries } from '@tanstack/react-query';
import { getProfiles } from '../../apis/getProfile';
import { getAccounts } from '../../apis/getAccounts';
import { useRecoilState } from 'recoil';
import { myAccountState } from '../../recoil/atom';

export default function Main() {
	const accessToken = getCookie('accessToken');
	const [myAccount, setMyAccount] = useRecoilState(myAccountState);
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
	const myProfileData = results[0].data;
	const myAccountsData = results[1].data;

	useEffect(() => {
		if (myProfileData) {
			const userProfileInfo = localStorage.setItem(
				'userProfileInfo',
				JSON.stringify(myProfileData),
			);
		}
	}, [myProfileData]);

	useEffect(() => {
		if (myAccountsData) {
			setMyAccount(myAccountsData);
			console.log(myAccount);
		}
	}, [myAccountsData, setMyAccount]);
	return (
		<>
			<HomeHeader />
			<HomeContent />
		</>
	);
}
