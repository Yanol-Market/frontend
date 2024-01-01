import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<div className="nav w-full absolute bottom-0 flex justify-around py-4 border-t-2 border-borderWhite rounded-t-3xl bg-white">
			<Link to={'/'}>
				<img
					className="m-auto"
					src={
						currentPath === '/'
							? '/assets/images/homeLogoActive.svg'
							: '/assets/images/homeLogo.svg'
					}
					alt="1"
				/>
				<p className="text-center text-gray">홈</p>
			</Link>
			<Link to={'/'}>
				<img
					className="m-auto"
					src={
						currentPath === '/location'
							? '/assets/images/locationLogoActive.svg'
							: '/assets/images/locationLogo.svg'
					}
					alt="1"
				/>
				<p className="text-center text-gray">지역</p>
			</Link>
			<Link to={'/'}>
				<img
					className="m-auto"
					src={
						currentPath === '/write'
							? '/assets/images/writeLogoActive.svg'
							: '/assets/images/writeLogo.svg'
					}
					alt="writeLogo"
				/>
				<p className="text-center text-gray">상품등록</p>
			</Link>
			<Link to={'/'}>
				<img
					className="m-auto"
					src={
						currentPath === '/list'
							? '/assets/images/listLogoActive.svg'
							: '/assets/images/listLogo.svg'
					}
					alt="listLogo"
				/>
				<p className="text-center text-gray">거래내역</p>
			</Link>
			<Link to={'/'}>
				<img
					className="m-auto"
					src={
						currentPath === '/myPage'
							? '/assets/images/profileLogoActive.svg'
							: '/assets/images/profileLogo.svg'
					}
					alt="profileLogo"
				/>
				<p className="text-center text-gray">지역</p>
			</Link>
		</div>
	);
};

export default Navigation;
