import React, { useState } from 'react';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import CardProd from './CardProd';
import { useQuerySoldDetail } from '../../../../hooks/useQuerySales';
import { formatDateTime, formatNumber } from '../../../../utils/formate';
import Chat from './Chat';
import { delSoldProd } from '../../../../apis/sales';
import { useNavigate } from 'react-router-dom';

const SoldDetail = () => {
	const { data, isLoading } = useQuerySoldDetail('1');
	const [bottom, setBottom] = useState(false);
	const navigate = useNavigate();

	console.log('판매완료 상세 ', data);
	const openBottom = () => {
		setBottom(true);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 판매완료 상세 - 판매완료 삭제 API
	// 테스트 못해봄
	const dltProduct = async (productId: number) => {
		try {
			const res = await delSoldProd(productId);
			console.log('판매 완료 상품 삭제 완료', res);
			alert(res.message);
			closeBottom();
			navigate(-1);
		} catch (error) {
			console.error('에러 발생:', error);
		}
	};

	if (isLoading) {
		return <div> isLoading </div>;
	}

	if (data) {
		return (
			<div className="p-5 pb-[100px]">
				<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
					<ContentTwoBtnPage
						title="판매 정보를 삭제하시겠습니까?"
						leftBtn="취소"
						rightBtn="삭제"
						leftBtnFunc={closeBottom}
						rightBtnFunc={() => dltProduct(data.productId)}
					/>
				</BottomSheet>
				<div className="pb-5 flex justify-between items-center">
					<p className="text-sm ">골든티켓 등록번호 {data.productId}</p>
					<div>
						<img
							src="/assets/images/delete.svg"
							alt="삭제하기"
							className="cursor-pointer"
							onClick={openBottom}
						/>
					</div>
				</div>

				<CardProd
					accommodationImage={data.accommodationImage}
					accommodationName={data.accommodationName}
					reservationType={data.reservationType}
					roomName={data.roomName}
					standardNumber={data.standardNumber}
					maximumNumber={data.maximumNumber}
					checkInTime={data.checkInTime}
					checkOutTime={data.checkOutTime}
					checkInDate={data.checkInDate}
					checkOutDate={data.checkOutDate}
					goldenPrice={data.goldenPrice}
				/>
				<div>
					<div className="text-body py-4 font-bold ">거래 정보</div>{' '}
					<div className="flex justify-between items-center text-lg pb-2">
						<div> 구매자 닉네임</div>
						<div> {data.receiverNickname}</div>
					</div>
					<div className="flex justify-between items-center text-lg  pb-2">
						<div> 거래일시</div>
						<div>{formatDateTime(data.completedDate)}</div>
					</div>
					<div className="flex justify-between items-center text-lg  pb-2">
						<div> 정산일시</div>
						<div>{formatDateTime(data.calculatedDate)}</div>
					</div>
					<div className="flex justify-between items-center text-lg  pb-2">
						<div className="flex items-center">
							<div>수수료</div>
							<div className="text-descGray text-m pl-1">(판매금 5%)</div>
						</div>
						<div>{formatNumber(data.fee)}원</div>
					</div>
					<div className="flex justify-between items-center text-lg  pb-2">
						<div> 정산금액</div>
						<div>{formatNumber(data.calculatedPrice)}원</div>
					</div>
				</div>
				<div className="text-body py-3 font-bold ">나의 거래</div>

				<Chat
					chatRoomId={data.chatRoomId}
					receiverNickname={data.receiverNickname}
					receiverProfileImage={data.receiverProfileImage}
					price={data.goldenPrice}
					lastUpdatedAt={data.lastUpdatedAt}
				/>
			</div>
		);
	}
	return <div> 오류오류</div>;
};

export default SoldDetail;
