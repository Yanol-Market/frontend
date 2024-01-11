import React from 'react';
import BuyProduct from '../salesHistory/BuyProduct';
import { useLocation, Outlet } from 'react-router-dom';

const Bought = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	// 구매완료
	return (
		<div> {currentPath === '/purchase' ? <BuyProduct /> : <Outlet />}</div>
	);
};

export default Bought;
