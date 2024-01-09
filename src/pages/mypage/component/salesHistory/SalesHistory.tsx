import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import Selling from './Selling';
import Sold from './Sold';

const SalesHistory = () => {
	const [currentTab, setCurrentTab] = useState('selling');

	return (
		<div>
			<Header title={'판매내역'} />
			<div className="h-[50px] w-full  flex  border-solid border-b-2 border-borderGray px-5">
				<div
					className={`w-1/2  flex justify-center font-body pt-4 ${
						currentTab === 'selling'
							? '  border-solid border-b-4 border-main font-semibold'
							: null
					} `}
					onClick={() => setCurrentTab('selling')}
				>
					판매중
				</div>
				<div
					className={` w-1/2 flex justify-center font-body pt-4   ${
						currentTab === 'sold'
							? '  border-solid border-b-4 border-main font-semibold '
							: null
					}`}
					onClick={() => setCurrentTab('sold')}
				>
					판매완료
				</div>
			</div>

			{currentTab === 'selling' ? <Selling /> : <Sold />}
		</div>
	);
};

export default SalesHistory;
