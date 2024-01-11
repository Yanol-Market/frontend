import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import BoughtProd from './BoughtProd';

// 구매완료 - purchase
const Bought = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div> {currentPath === '/purchase' ? <BoughtProd /> : <Outlet />}</div>
	);
};

export default Bought;
