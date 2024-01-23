import React, { useState } from 'react';
import StatusBar from './StatusBar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardProd from './CardProd';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import SellingBottom from './SellingBottom';
import { useQuerySales } from '../../../../hooks/useQuerySales';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Chat from './Chat';
import { useNavigate } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { editProdState } from '../../../../recoil/prodEditAtom';
import SellingSkeleton from './skeleton/SellingSkeleton';

// 판매중
const Selling = () => {
	const [Bottom, setBottom] = useState(false);
	const [click, setClick] = useState(false);
	const { data, isLoading, error } = useQuerySales();

	const navigate = useNavigate();

	const editData = useSetRecoilState(editProdState);

	console.log('판매중 성꽁', data);
	console.log('판매중 에러', error);
	console.log('판매중 메세지', error?.message);
	// console.log('판매중 Fail', error.response);
	// console.log('판매중 성꽁22', data?.[0].chats);
	const openBottom = () => {
		setBottom(true);
		console.log('오픈');
	};

	const closeBottom = () => {
		setBottom(false);
	};

	const handleClick = (
		status: string,
		productId: number,
		yanolja: number,
		origin: number,
		golden: number,
	) => {
		if (status === null) {
			editData({
				yanolja: yanolja,
				origin: origin,
				golden: golden,
			});
			//  수정 페이지로 이동
			navigate(`/edit/${productId}`);
			console.log('이동');
		} else {
			setBottom(true);
			console.log('오픈');
		}
	};
	if (isLoading) {
		return (
			<div>
				{' '}
				<SellingSkeleton />{' '}
			</div>
		);
	}

	if (error) {
		return <div> 에러 에러 </div>;
	}
	if (data) {
		return (
			<>
				{data.length === 0 ? (
					<div className="h-screen flex items-center justify-center text-lg text-descGray pb-36">
						판매중인 상품이 없습니다.
					</div>
				) : (
					<div className="p-5 pb-[80px]">
						{data.map((item, index) => (
							<div key={item.productId}>
								<BottomSheet
									isOpen={Bottom}
									onClose={closeBottom}
									viewHeight="160px"
								>
									<div className="w-full h-full flex flex-col justify-center items-center">
										<div className="text-body">
											거래 진행 중인 경우 상품을 수정할 수 없습니다.
										</div>
									</div>
								</BottomSheet>

								<div className="pb-4 flex justify-between items-center">
									<p className="text-sm">골든티켓 등록번호 {item.productId}</p>
									<div>
										<img
											src="/assets/images/ic_edit.svg"
											className="cursor-pointer"
											onClick={() =>
												handleClick(
													item.status,
													item.productId,
													item.yanoljaPrice,
													item.originPrice,
													item.goldenPrice,
												)
											}
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
													<Chat
														chatRoomId={item.chatRoomId}
														receiverNickname={item.receiverNickname}
														receiverProfileImage={item.receiverProfileImage}
														price={item.price}
														lastUpdatedAt={item.lastUpdatedAt}
														status={item.status}
													/>
												</div>
											))}
								</div>
							</div>
						))}
					</div>
				)}
			</>
		);
	}
	return <div> 알수 없는 오류오류 </div>;
};

export default Selling;
