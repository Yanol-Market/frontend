import React, { useState } from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useLocation } from 'react-router-dom';
import { BuyerProps } from '../../../../data/purchasesData';

const Buyer = (props: BuyerProps) => {
	const [click, setClick] = useState(false);
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<div className="pt-5">
			<div className="flex mb-4">
				{currentPath === '/purchase' ? (
					<div className="text-body font-semibold"> 나의 구매현황 </div>
				) : (
					<>
						<div className="text-body font-semibold">구매 희망자 </div>
						<div>
							{click ? (
								<ExpandMoreOutlinedIcon
									onClick={() => setClick(!click)}
									className="cursor-pointer"
								/>
							) : (
								<ExpandLessRoundedIcon
									onClick={() => setClick(!click)}
									className="cursor-pointer"
								/>
							)}
						</div>
					</>
				)}
			</div>
			{click ? null : (
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
			)}
			{/* <div className=" border-b-[1px] border-borderGray pt-3"></div> */}
		</div>
	);
};

export default Buyer;
