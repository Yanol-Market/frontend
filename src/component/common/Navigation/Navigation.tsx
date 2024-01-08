import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<div className="nav w-full absolute bottom-0 flex justify-around py-4 border-t-2 border-borderWhite rounded-t-3xl bg-white">
			<Link to={'/'}>
				<img
					className="m-auto mb-2"
					src={
						currentPath === '/'
							? '/assets/images/homeLogoActive.svg'
							: '/assets/images/homeLogo.svg'
					}
					alt="1"
				/>
				<p className="text-center text-gray text-sm font-pre">홈</p>
			</Link>
			<Link to={'/location'}>
				<img
					className="m-auto mb-2"
					src={
						currentPath === '/location'
							? '/assets/images/locationLogoActive.svg'
							: '/assets/images/locationLogo.svg'
					}
					alt="1"
				/>
				<p className="text-center text-gray text-sm font-pre">지역</p>
			</Link>
			<Link to={'/'}>
				<img
					className="m-auto mb-2"
					src={
						currentPath === '/write'
							? '/assets/images/writeLogoActive.svg'
							: '/assets/images/writeLogo.svg'
					}
					alt="writeLogo"
				/>
				<p className="text-center text-gray font-pre text-sm">상품등록</p>
			</Link>
			<Link to={'/'}>
				<img
					className="m-auto mb-2"
					src={
						currentPath === '/list'
							? '/assets/images/listLogoActive.svg'
							: '/assets/images/chatLogo.svg'
					}
					alt="listLogo"
				/>
				<p className="text-center text-gray text-sm font-pre">나의거래</p>
			</Link>
			<Link to={'/'}>
				<img
					className="m-auto mb-2"
					src={
						currentPath === '/myPage'
							? '/assets/images/profileLogoActive.svg'
							: '/assets/images/profileLogo.svg'
					}
					alt="profileLogo"
				/>
				<p className="text-center text-sm text-gray font-pre">마이</p>
			</Link>
		</div>
	);
};

export default Navigation;
