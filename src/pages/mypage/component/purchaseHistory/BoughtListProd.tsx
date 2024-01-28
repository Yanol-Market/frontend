import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useNavigate } from 'react-router';
import { useQueryBoughtList } from '../../../../hooks/useQueryPurchases';
import { BoughtProd } from '../../../../data/purchasesData';
import { formatNumber, formatTimeAgo } from '../../../../utils/formate';
import { delBoughtProd } from '../../../../apis/purchases';
import { useQueryClient } from '@tanstack/react-query';
import ListSkeleton from '../salesHistory/skeleton/ListSkeleton';
import Swal from 'sweetalert2';
import { NotFoundPage } from '../../../../component/common/NotFound';

const BoughtListProd = () => {
	const queryClient = useQueryClient();

	const { isLoading, error, data } = useQueryBoughtList();
	console.log('구매완료 ', data);
	console.log('구매완료 실패 ', error);

	const [bottom, setBottom] = useState(false);
	const [orderId, setOrderId] = useState<number>(0);
	const navigate = useNavigate();

	const openBottom = (orderId: number) => {
		setBottom(true);
		setOrderId(orderId);
		console.log(orderId);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 구매 완료 - 구매완료 상품 삭제 API
	const delPurchaseProd = async () => {
		try {
			const res = await delBoughtProd(orderId);
			console.log('구매 완료 리스트 삭제 완료', res);
			Swal.fire({
				icon: 'success',
				text: res.message,
				showConfirmButton: false,
				timer: 1700,
			});
			queryClient.invalidateQueries({ queryKey: ['BoughtList'] });
			closeBottom();
		} catch (error) {
			console.error('에러 발생:', error);
			<NotFoundPage />;
		}
	};

	const detailClick = (productId: number, orderId: number) => {
		console.log('클릭');
		navigate(`/purchase/detail/${productId}?order=${orderId}`);
	};

	if (isLoading) {
		return (
			<div>
				{[...Array(5)].map((_, index) => (
					<ListSkeleton key={index} />
				))}
			</div>
		);
	}

	if (error) {
		return <div> error </div>;
	}

	if (data) {
		return (
			<>
				{data.length === 0 ? (
					<>
						<div className="h-screen flex items-center justify-center text-lg text-descGray pb-36">
							구매완료된 상품이 없습니다.
						</div>
					</>
				) : (
					<div className="pb-[80px]">
						{data.map((item: BoughtProd) => (
							<div
								key={item.productId}
								className="p-5 pb-8 border-borderWhite border-b-[1px]"
							>
								<div className="pb-4 flex justify-between items-center ">
									<p className="text-sm ">골든티켓 등록번호 {item.productId}</p>
									<div>
										<img
											src="/assets/images/delete.svg"
											alt="삭제하기"
											className="cursor-pointer "
											onClick={() => openBottom(item.orderId)}
										/>
										<BottomSheet
											isOpen={bottom}
											onClose={closeBottom}
											viewHeight="220px"
										>
											<ContentTwoBtnPage
												title="구매 정보를 삭제하시겠습니까?"
												leftBtn="취소"
												rightBtn="삭제"
												leftBtnFunc={closeBottom}
												rightBtnFunc={delPurchaseProd}
											/>
										</BottomSheet>
									</div>
								</div>
								<div className="flex justify-between">
									<div className="flex">
										<img
											src={item.accommodationImage}
											alt="image"
											className="w-[80px] h-[80px] rounded-lg "
										/>
										<div className="px-[10px]">
											<div className="flex items-center ">
												{' '}
												<p className="text-lg font-bold">
													{item.accommodationName}
												</p>
												<p className=" text-m text-gray pl-2">
													{formatTimeAgo(item.completedAt)}
												</p>
											</div>

											<div className="flex">
												<p className="text-lg pr-[8px]">{item.roomName}</p>
												<div className="flex items-center">
													<div className="border-r-2 border-borderGray h-[12px]"></div>
												</div>
												<p className="text-lg pl-[8px]">
													{item.standardNumber}인/최대{item.maximumNumber}
												</p>
											</div>
											<p className="text-lg font-bold pt-[15px]">
												{formatNumber(item.price)}원
											</p>
										</div>
									</div>

									<div className="flex justify-end h-[80px] items-end">
										<ArrowForwardIosIcon
											sx={{ width: '15px' }}
											className="cursor-pointer"
											onClick={() => detailClick(item.productId, item.orderId)}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</>
		);
	}

	return <> </>;
};

export default BoughtListProd;
