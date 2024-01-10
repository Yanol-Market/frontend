import React from 'react';
import SalesProduct from './SalesProduct';
import StatusBar from './StatusBar';
import Buyer from './Buyer';

const Selling = () => {
	// 판매중
	return (
		<div className="p-5">
			<SalesProduct />
			<StatusBar />
			<Buyer />
		</div>
	);
};

export default Selling;