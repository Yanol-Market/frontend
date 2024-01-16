import React, { useEffect } from 'react';
import StatusBar from '../salesHistory/StatusBar';
import Buyer from '../salesHistory/Buyer';
import CardProd from '../salesHistory/CardProd';
import { getPurchases } from '../../../../apis/purchases';
import { getProducts } from '../../../../apis/home';
const Buying = () => {
	const data = getPurchases();
	console.log('getPurchases', data);

	const fetchData = async () => {
		const res = await getPurchases();
		const res1 = await getProducts();
		console.log(res);
		console.log(res1);
	};

	useEffect(() => {
		fetchData();
	}, []);

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
