/**
 * @description useEffect 로 스크롤 이벤트 등록 할 때 newHeight 계산하고 스크롤 멈추면 이벤트 제거
 * @param newHeight window.scrollY 를 원하시는 높이로 수정해주셔도 될 것 같아요!
 * @param currentHeight  현재 높이값 저장
 */
import React, { useEffect, useState } from 'react';
import StatusBar from './StatusBar';
import CardProd from './CardProd';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import { useQuerySales } from '../../../../hooks/useQuerySales';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import Chat from './Chat';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { editProdState } from '../../../../recoil/prodEditAtom';
import SellingSkeleton from './skeleton/SellingSkeleton';

// 판매중
const Selling = () => {
	const navigate = useNavigate();
	const editData = useSetRecoilState(editProdState);

	const [Bottom, setBottom] = useState(false);
	const [click, setClick] = useState(false);
	const { data, isLoading, error } = useQuerySales();

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
		} else {
			setBottom(true);
		}
	};

	const navigateToDetailPage = (productId: number) => {
		navigate(`/product/${productId}`);
	};

	if (isLoading) {
		return (
			<div>
				<SellingSkeleton />
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
					<div className="pb-[90px]">
						{data.map((item, index) => (
							<div key={item.productId}>
								{index === 0 ? null : (
									<div className="border-b-[7px] border-lightGray  my-[32px]">
										{' '}
									</div>
								)}
								<div className="p-5">
									<BottomSheet
										isOpen={Bottom}
										onClose={closeBottom}
										viewHeight="170px"
									>
										<div className="w-full  flex flex-col justify-center items-center h-[170px] ">
											<div className="text-body">
												거래 진행 중인 경우 상품을 수정할 수 없습니다.
											</div>
										</div>
									</BottomSheet>

									<div className="pb-4 flex justify-between items-center">
										<p
											className="text-sm cursor-pointer"
											onClick={() => navigateToDetailPage(item.productId)}
										>
											골든티켓 등록번호 {item.productId}
										</p>
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
									<div
										onClick={() => navigateToDetailPage(item.productId)}
										className="cursor-pointer"
									>
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
									</div>
									<StatusBar status={item.status} />
									<div className="flex mt-5 pb-1">
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

									<div>
										{click
											? null
											: data?.[index].chats.map((item) => (
													<div className=" pt-3" key={item.chatRoomId}>
														<Chat
															chatRoomId={item.chatRoomId}
															receiverNickname={item.receiverNickname}
															receiverProfileImage={item.receiverProfileImage}
															price={item.price}
															lastUpdatedAt={item.lastUpdatedAt}
															status={item.chatRoomStatus}
														/>
													</div>
												))}
									</div>
									<div className=" border-b border-borderWhite pt-3 "></div>
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
