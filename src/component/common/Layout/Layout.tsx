import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const navPages = [
		'/main',
		'/location',
		'/',
		'/purchase',
		'/sales',
		'/chatList',
	];
	const isNavPage = navPages.includes(currentPath);
	console.log('Is Nav Page:', isNavPage);

	return (
		<div className="bg-borderGray min-h-screen relative">
			<div className="bg-white max-w-[375px] min-h-screen m-auto top-0 left-0 overflow-x-clip sm:w-[375px]">
				<Outlet />
				<div className="fixed w-[375px] bottom-0">
					{isNavPage && <Navigation />}
				</div>
			</div>
		</div>
	);
};

export default Layout;
