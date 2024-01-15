import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import SoldListProd from './SoldListProd';

const Sold = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	// 판매완료
	return <div>{currentPath === '/sales' ? <SoldListProd /> : <Outlet />}</div>;
};

export default Sold;
