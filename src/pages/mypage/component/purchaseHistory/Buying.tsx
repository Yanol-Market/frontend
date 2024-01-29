import React from 'react';
import StatusBar from '../salesHistory/StatusBar';
import CardProd from '../salesHistory/CardProd';
import { BuyingProd } from '../../../../data/purchasesData';
import { useQueryPurchases } from '../../../../hooks/useQueryPurchases';
import Chat from '../salesHistory/Chat';
import { useNavigate } from 'react-router';
import SellingSkeleton from '../salesHistory/skeleton/SellingSkeleton';
import { NotFoundPage } from '../../../../component/common/NotFound';

const Buying = () => {
	const navigate = useNavigate();
	const { isLoading, error, data } = useQueryPurchases();

	const navigateToDetailPage = (productId: number) => {
		navigate(`/product/${productId}`);
	};

	if (isLoading) {
		return (
			<div>
				{' '}
				<SellingSkeleton />
			</div>
		);
	}

	if (error) {
		return (
			<div>
				{' '}
				<NotFoundPage />{' '}
			</div>
		);
	}

	if (data) {
		return (
			<>
				{data.length === 0 ? (
					<div className="h-screen flex items-center justify-center text-lg text-descGray pb-36">
						구매중인 상품이 없습니다.
					</div>
				) : (
					<div className="pb-[90px]">
						{data.map((item: BuyingProd, index) => (
							<div className="" key={item.productId}>
								{index === 0 ? null : (
									<div className="border-b-[7px] border-lightGray  my-[32px]">
										{' '}
									</div>
								)}
								<div className="p-5">
									<div
										onClick={() => navigateToDetailPage(item.productId)}
										className="cursor-pointer"
									>
										<div className="pb-5 flex justify-between items-center">
											<p className="text-sm ">
												골든티켓 등록번호 {item.productId}
											</p>
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
									</div>
									<StatusBar status={item.status} />
									<div className="flex mb-4 pt-2">
										<div className="text-body font-semibold pt-3">
											{' '}
											나의 구매현황{' '}
										</div>
									</div>
									<Chat
										chatRoomId={item.chatRoomId}
										receiverNickname={item.receiverNickname}
										receiverProfileImage={item.receiverProfileImage}
										price={item.price}
										lastUpdatedAt={item.lastUpdatedAt}
									/>
								</div>
							</div>
						))}
					</div>
				)}
			</>
		);
	}
	return <div> 알수없는 못한 오류</div>;
};

export default Buying;
