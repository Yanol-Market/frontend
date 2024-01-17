import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BuyerProps } from '../../../../data/purchasesData';

const SalesBuyer = (props: BuyerProps) => {
	return (
		<div className="border-borderGray border px-5 py-3 mt-2 flex items-center  justify-between rounded-lg">
			<div className="flex items-center">
				<div>
					<img src="/assets/images/userDefault.svg" alt="userDefault" />
				</div>
				<div className="text-lg px-3"> {props.receiverNickname} </div>
				<div className="text-m text-descGray"> {props.lastUpdatedAt}</div>
			</div>

			<div className="flex items-center">
				<div className="font-bold pr-3">{props.price}</div>
				<div>
					<ArrowForwardIosIcon
						sx={{ width: '15px' }}
						className="cursor-pointer"
					/>
				</div>{' '}
			</div>
		</div>
	);
};

export default SalesBuyer;
