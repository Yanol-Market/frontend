import React, { useState } from 'react';
import { useQueryExpiredDetail } from '../../../../hooks/useQuerySales';
import CardProd from './CardProd';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { delSoldProd } from '../../../../apis/sales';
import SoldSkeleton from './skeleton/SoldSkeleton';
import { NotFoundPage } from '../../../../component/common/NotFound';

const ExpiredProdDetail = () => {
	const { productId } = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const status = searchParams.get('status');

	const { data, isLoading } = useQueryExpiredDetail(
		`${productId}`,
		`${status}`,
	);
	const [bottom, setBottom] = useState(false);

	const openBottom = () => {
		setBottom(true);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 판매완료 상세 - 판매완료 삭제 API
	const dltProduct = async (productId: number) => {
		try {
			const res = await delSoldProd(productId);
			alert(res.message);
			closeBottom();
			navigate(-1);
		} catch (error) {
			<NotFoundPage />;
		}
	};

	if (isLoading) {
		return (
			<div>
				{' '}
				<SoldSkeleton />{' '}
			</div>
		);
	}

	if (data) {
		return (
			<div className="p-5">
				<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
					<ContentTwoBtnPage
						title="판매 정보를 삭제하시겠습니까?"
						leftBtn="취소"
						rightBtn="삭제"
						leftBtnFunc={closeBottom}
						rightBtnFunc={() => dltProduct(data.productId)}
					/>
				</BottomSheet>
				<div className="font-bold text-lg">판매 기간이 만료된 상품입니다.</div>
				<div className="py-4 flex justify-between items-center">
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
					reservationType={'상품만료'}
					roomName={data.roomName}
					standardNumber={data.standardNumber}
					maximumNumber={data.maximumNumber}
					checkInTime={data.checkInTime}
					checkOutTime={data.checkOutTime}
					checkInDate={data.checkInDate}
					checkOutDate={data.checkOutDate}
				/>
			</div>
		);
	}
	return <div> </div>;
};

export default ExpiredProdDetail;
