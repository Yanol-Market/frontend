import React, { useState } from 'react';
import { Header } from '../../../../component/common/Header';
import Buying from './Buying';
import Bought from './Bought';
import { useNavigate } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';
const PurchaseHistory = () => {
	const [currentTab, setCurrentTab] = useState(true);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const purchaseClick = () => {
		setCurrentTab(true);
		navigate(`/purchase`);
	};

	// 공지 알람
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Header title={'구매내역'} />
			<div className="h-[50px] w-full  flex  border-solid border-b-2 border-borderGray px-5">
				<div
					className={`w-1/2  flex justify-center font-body pt-2 ${
						currentTab
							? '  border-solid border-b-4 border-main font-semibold'
							: null
					} `}
					onClick={purchaseClick}
				>
					<div className="flex justify-center items-center relative ">
						<p className="pr-1 cursor-pointer">구매중 </p>
						<img
							src="assets/images/ic.svg"
							alt="heartImage"
							className="w-[14px] h-[14px] cursor-pointer "
							onClick={handleOpen}
						/>
						{/* 공지 알람 */}
						{open && (
							<div className="absolute top-4 left-[54px] w-[220px] h-[150px] bg-homeMain p-2 rounded-lg shadow-md">
								<div className="w-full flex items-end justify-end ">
									<CloseIcon
										sx={{ width: '18px', color: '#BDBDBD' }}
										onClick={handleClose}
										className="cursor-pointer"
									/>{' '}
								</div>

								<p className="text-lg font-semibold pb-1 px-2">
									구매 중인 상품이 보이지 않나요?
								</p>
								<div className="text-m font-extralight leading-relaxed px-2">
									<p>거래가 취소 되었거나, 상품이 다른 분께</p>
									<p>예약 혹은 판매 되었을 수 있어요.</p>
									<p>거래 내역을 확인하시려면 화면 하단의</p>
									<p>{`'나의 거래'를 선택해주세요.`}</p>
								</div>
							</div>
						)}
					</div>
				</div>
				<div
					className={`cursor-pointer w-1/2 flex justify-center font-body pt-4   ${
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
