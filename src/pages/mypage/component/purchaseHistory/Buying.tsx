import React from 'react';
import StatusBar from '../salesHistory/StatusBar';
import Buyer from '../salesHistory/Buyer';
import CardProd from '../salesHistory/CardProd';

const Buying = () => {
	return (
		<div className="p-5">
			<div className="pb-5 flex justify-between items-center">
				<p className="text-sm ">골든티켓 등록번호 4567894512</p>
			</div>

			<CardProd />
			<StatusBar />
			<Buyer />
		</div>
	);
};

export default Buying;
