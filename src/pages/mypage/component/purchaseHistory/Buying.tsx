import React from 'react';
import StatusBar from '../salesHistory/StatusBar';
import CardProd from '../salesHistory/CardProd';
import { BuyingProd } from '../../../../data/purchasesData';
import { useQueryPurchases } from '../../../../hooks/useQueryPurchases';
import Chat from '../salesHistory/Chat';

const Buying = () => {
	const { isLoading, error, data } = useQueryPurchases();
	console.log('구매중', data);
	// console.log('구매중', data);

	if (isLoading) {
		return <div> loading ... </div>;
	}

	// if (error) {
	// 	return <div> 에러녜녜ㅖ </div>;
	// }

	console.log('구매중 에러 ', error);
	// if (data && !data.data) {
	// 	return <div> 상품 아무것도없다 </div>;
	// }
	if (data) {
		return (
			<div className="pb-[80px]">
				{data.map((item: BuyingProd) => (
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
				))}
			</div>
		);
	}
	return <div> 예상치 못한 오류</div>;
};

export default Buying;
