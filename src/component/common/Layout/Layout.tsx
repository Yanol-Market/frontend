import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const navPages = ['/main', '/'];
	const isNavPage = navPages.includes(currentPath);
	return (
		<div className="bg-borderGray  min-h-screen ">
			<div className="bg-white min-h-screen max-w-[360px] relative m-auto top-0 left-0 overflow-x-clip sm:w-[360px]">
				<Outlet />
				{isNavPage && <Navigation />}
			</div>
		</div>
	);
};

export default Layout;
