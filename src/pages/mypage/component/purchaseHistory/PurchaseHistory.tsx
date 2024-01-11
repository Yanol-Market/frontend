import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import Buying from './Buying';
import Bought from './Bought';
import { useNavigate } from 'react-router';

const PurchaseHistory = () => {
	const [currentTab, setCurrentTab] = useState(true);
	const navigate = useNavigate();
	const purchaseClick = () => {
		setCurrentTab(true);
		navigate(`/purchase`);
	};
	return (
		<div>
			<Header title={'구매내역'} />
			<div className="h-[50px] w-full  flex  border-solid border-b-2 border-borderGray px-5">
				<div
					className={`w-1/2  flex justify-center font-body pt-4 ${
						currentTab
							? '  border-solid border-b-4 border-main font-semibold'
							: null
					} `}
					onClick={purchaseClick}
				>
					구매 중
				</div>
				<div
					className={` w-1/2 flex justify-center font-body pt-4   ${
						currentTab
							? null
							: '  border-solid border-b-4 border-main font-semibold '
					}`}
					onClick={() => setCurrentTab(false)}
				>
					구매완료
				</div>
			</div>
			{currentTab ? <Buying /> : <Bought />}
		</div>
	);
};

export default PurchaseHistory;
