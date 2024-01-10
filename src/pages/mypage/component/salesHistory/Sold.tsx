import React from 'react';
import BuyProduct from './BuyProduct';
import SoldDetail from './SoldDetail';
import { useLocation, Outlet } from 'react-router-dom';
const Sold = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	// 판매완료
	return <div>{currentPath === '/sales' ? <BuyProduct /> : <Outlet />}</div>;
};

export default Sold;
