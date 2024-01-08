import React, { useState } from 'react';
import { Header } from '../../../component/common/Header';
import BottomSheet from '../../../component/common/BottomSheet/BottomSheet';
import RemoveAccount from './RemoveAccount';

const MyAccount = () => {
	// const [myAccount, setMyAccount] = useState();
	const [isBottomSheetAccountOpen, setIsBottomSheetAccountOpen] =
		useState(false);

	const openBottomSheetAccount = () => {
		setIsBottomSheetAccountOpen(true);
	};

	const closeBottomSheetAccount = () => {
		setIsBottomSheetAccountOpen(false);
	};
	return (
		<div>
			<Header title="내 계좌" />
			<div className="w-full h-[100vh] flex flex-col items-center">
				<BottomSheet
					isOpen={isBottomSheetAccountOpen}
					onClose={closeBottomSheetAccount}
					viewHeight="calc(100vh * 0.3)"
				>
					<RemoveAccount />
				</BottomSheet>
				<div className="w-[90%]">
					<div className="border border-main h-28 flex flex-col p-4 bg-bgMain rounded-xl mt-9">
						<p className="font-bold mb-3">홍길동</p>
						<div className="flex flex-row">
							<img src="/assets/images/banks/nh.svg" alt="농협은행" />
							<span>농협은행</span>
						</div>
						<div className="flex flex-row justify-between">
							<p>1234567890112233</p>
							<img
								className="cursor-pointer"
								src="/assets/images/trashCan.svg"
								alt="쓰레기통"
								onClick={openBottomSheetAccount}
							/>
						</div>
					</div>
					<button
						type="button"
						className="flex items-center text-center mx-auto mt-80 w-full h-11 rounded-xl text-gray text-m bg-main"
					>
						<p className="text-center mx-auto text-white">계좌 등록하기</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default MyAccount;
