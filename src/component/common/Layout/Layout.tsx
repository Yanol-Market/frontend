import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const { productId } = useParams();

	const navPages = [
		'/main',
		'/location',
		'/',
		'/purchase',
		'/sales',
		'/chatList',
		'/mypage',
	];

	if (productId) {
		navPages.push(`/purchase/detail/${productId}`);
		navPages.push(`/sales/detail/${productId}`);
	}

	const isNavPage = navPages.includes(currentPath);
	return (
		<div className="bg-borderGray min-h-screen relative">
			<div className="bg-white min-w-[360px] max-w-[430px] min-h-screen m-auto top-0 left-0 overflow-x-clip ">
				<Outlet />
				<div className="fixed w-[430px] bottom-0">
					{isNavPage && <Navigation />}
				</div>
			</div>
		</div>
	);
};

export default Layout;
