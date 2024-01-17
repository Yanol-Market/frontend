import React, { useEffect } from 'react';
import StatusBar from '../salesHistory/StatusBar';
import Buyer from '../salesHistory/Buyer';
import CardProd from '../salesHistory/CardProd';
import { BuyingProd } from '../../../../data/purchasesData';
import { useQueryPurchases } from '../../../../hooks/useQueryPurchases';
const Buying = () => {
	const { isLoading, error, data } = useQueryPurchases();
	console.log('리액트 쿼리 성공', data?.data);
	console.log('리액트 쿼리 성공2', data);

	if (isLoading) {
		return <div> loading ... </div>;
	}

	if (error) {
		return <div> 에러 </div>;
	}
	if (data && !data.data) {
		return <div> 상품 아무것도없다 </div>;
	}
	if (data && data.data) {
		return (
			<div className="pb-[80px]">
				{data.data.map((item: BuyingProd) => (
					<div className="p-5" key={item.productId}>
						<div className="pb-5 flex justify-between items-center">
							<p className="text-sm ">골든티켓 등록번호 {item.productId}</p>
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
						<Buyer
							chatRoomId={item.chatRoomId}
							receiverNickname={item.receiverNickname}
							receiverProfileImage={item.receiverProfileImage}
							price={item.price}
							lastUpdatedAt={item.lastUpdatedAt}
						/>
					</div>
				))}
			</div>
		);
	}
	return <div> 예상치 못한 오류</div>;
};

export default Buying;
