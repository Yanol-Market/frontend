import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BuyerProps } from '../../../../data/purchasesData';
import { formatNumber, formatTimeAgo } from '../../../../utils/formate';
import { useNavigate } from 'react-router';

const Chat = (props: BuyerProps) => {
	const status = props.status;
	const navigate = useNavigate();
	console.log(status);

	const handleClick = (chatRoomId: number) => {
		navigate(`/chat?chatId=${chatRoomId}`);
	};
	if (status === 'INACTIVE') {
		return (
			<div className=" bg-borderWhite  px-5  py-3  flex items-center  justify-between rounded-lg">
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
							onClick={() => handleClick(props.chatRoomId)}
						/>
					</div>{' '}
				</div>
			</div>
		);
	}
	return (
		<div className="border-borderGray border px-5 py-3  flex items-center justify-between rounded-lg">
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
						className="cursor-pointer "
						onClick={() => handleClick(props.chatRoomId)}
					/>
				</div>{' '}
			</div>
		</div>
	);
};

export default Chat;
