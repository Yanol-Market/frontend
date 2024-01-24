import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BuyerProps } from '../../../../data/purchasesData';
import { formatNumber, formatTimeAgo } from '../../../../utils/formate';

const Chat = (props: BuyerProps) => {
	const status = props.status;
	console.log(status);

	if (status === 'INACTIVE') {
		return (
			<div className=" bg-borderWhite  px-5 py-3 mt-2 flex items-center  justify-between rounded-lg">
				<div className="flex items-center">
					<div>
						<img src="/assets/images/userDefaultGray.svg" alt="userDefault" />
					</div>
					<div className="text-lg px-3  text-gray">
						{' '}
						{props.receiverNickname}{' '}
					</div>
					<div className="text-m text-gray">
						{formatTimeAgo(props.lastUpdatedAt)}
					</div>
				</div>

				<div className="flex items-center">
					<div className="font-bold pr-3  text-gray">
						{formatNumber(props.price)}원
					</div>
					<div>
						<ArrowForwardIosIcon
							sx={{ width: '15px' }}
							className="cursor-pointer  text-gray "
						/>
					</div>{' '}
				</div>
			</div>
		);
	}
	return (
		<div className="border-borderGray border px-5 py-3 mt-2 flex items-center justify-between rounded-lg">
			<div className="flex items-center">
				<div>
					<img src="/assets/images/userDefault.svg" alt="userDefault" />
				</div>
				<div className="text-lg px-3"> {props.receiverNickname} </div>
				<div className="text-m text-descGray">
					{formatTimeAgo(props.lastUpdatedAt)}
				</div>
				{status === 'YELLOW_DOT' ? (
					<div className="w-2 h-2 ml-3 bg-main rounded-full" />
				) : null}
			</div>

			<div className="flex items-center">
				<div className="font-bold pr-3">{formatNumber(props.price)}원</div>
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

export default Chat;
