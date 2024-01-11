import React from 'react';
import SalesProduct from '../salesHistory/SalesProduct';
import StatusBar from '../salesHistory/StatusBar';
import Buyer from '../salesHistory/Buyer';

const Buying = () => {
	return (
		<div className="p-5">
			<div className="pb-5 flex justify-between items-center">
				<p className="text-sm pt-[8px]">골든티켓 등록번호 4567894512</p>
			</div>
			<SalesProduct />
			<StatusBar />
			<Buyer />
		</div>
	);
};

export default Buying;
