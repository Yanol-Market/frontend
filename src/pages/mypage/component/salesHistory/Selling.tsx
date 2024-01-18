import React, { useState } from 'react';
import StatusBar from './StatusBar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardProd from './CardProd';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import SellingBottom from './SellingBottom';
import { useQuerySales } from '../../../../hooks/useQuerySales';
import SalesBuyer from './SalesBuyer';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

// 판매중
const Selling = () => {
	const [Bottom, setBottom] = useState(false);
	const [click, setClick] = useState(false);
	const { data, isLoading, error } = useQuerySales();

	console.log('판매중 성꽁', data);
	console.log('판매중 성꽁22', data?.[0]?.chats);
	const openBottom = () => {
		setBottom(true);
		console.log('오픈');
	};

	const closeBottom = () => {
		setBottom(false);
	};

	if (isLoading) {
		return <div> isLoading </div>;
	}

	if (!data) {
		return <div> 판매중인 상품이 없습ㄴ디ㅏ </div>;
	}
	if (data) {
		return (
			<div className="p-5 pb-[80px]">
				{data.map((item, index) => (
					<div key={item.productId}>
						<BottomSheet
							isOpen={Bottom}
							onClose={closeBottom}
							viewHeight="160px"
						>
							<SellingBottom
								setBottom={setBottom}
								productId={item.productId}
								yanoljaPrice={item.yanoljaPrice}
								originPrice={item.originPrice}
							/>
						</BottomSheet>

						<div className="pb-4 flex justify-between items-center">
							<p className="text-sm">골든티켓 등록번호 {item.productId}</p>
							<div>
								<MoreVertIcon
									sx={{ width: '13px', color: '#BDBDBD' }}
									className="cursor-pointer"
									onClick={openBottom}
								/>
							</div>
						</div>
						<CardProd
							accommodationImage={item.accommodationImage}
							accommodationName={item.accommodationName}
							reservationType={item.reservationType}
							roomName={item.roomName}
							standardNumber={item.standardNumber}
							maximumNumber={item.maximumNumber}
							checkInTime={item.checkInTime}
							checkOutTime={item.checkOutTime}
							checkInDate={item.checkInDate}
							checkOutDate={item.checkOutDate}
							goldenPrice={item.goldenPrice}
						/>
						<StatusBar status={item.status} />
						<div className="flex my-4 pt-3">
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
						</div>
						<div className="pb-5">
							{click
								? null
								: data?.[index].chats.map((item) => (
										<div key={item.chatRoomId}>
											<SalesBuyer
												chatRoomId={item.chatRoomId}
												receiverNickname={item.receiverNickname}
												receiverProfileImage={item.receiverProfileImage}
												price={item.price}
												lastUpdatedAt={item.lastUpdatedAt}
											/>
										</div>
									))}
						</div>
					</div>
				))}
			</div>
		);
	}
	return <div> 알수 없는 오류오류 </div>;
};

export default Selling;
