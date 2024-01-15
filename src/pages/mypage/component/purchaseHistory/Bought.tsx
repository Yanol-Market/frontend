import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';

import BoughtListProd from './BoughtListProd';

// 구매완료 - purchase
const Bought = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div> {currentPath === '/purchase' ? <BoughtListProd /> : <Outlet />}</div>
	);
};

export default Bought;
