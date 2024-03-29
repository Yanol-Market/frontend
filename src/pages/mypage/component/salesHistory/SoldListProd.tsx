import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useNavigate } from 'react-router';
import { useQuerySoldList } from '../../../../hooks/useQuerySales';
import { productStatusTrans } from '../../../../utils/translate';
import { formatNumber } from '../../../../utils/formate';
import { delSoldProd } from '../../../../apis/sales';
import { useQueryClient } from '@tanstack/react-query';
import ListSkeleton from './skeleton/ListSkeleton';
import { NotFoundPage } from '../../../../component/common/NotFound';
import Swal from 'sweetalert2';

// 판매완료 리스트
const SoldListProd = () => {
	const { isLoading, error, data } = useQuerySoldList();

	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [bottom, setBottom] = useState(false);
	const [productId, setProductId] = useState<number>(0);

	const openBottom = (productId: number) => {
		setBottom(true);
		setProductId(productId);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 판매 완료 - 판매완료 상품 삭제 API
	const delSalesProd = async () => {
		try {
			const res = await delSoldProd(productId);
			Swal.fire({
				icon: 'success',
				text: res.message,
				showConfirmButton: false,
				timer: 1700,
			});
			queryClient.invalidateQueries({ queryKey: ['soldList'] });
			closeBottom();
		} catch (error) {
			console.error('에러 발생:', error);
		}
	};

	// 판매 완료 상세 클릭 (만료, 완료 나누기)
	const detailClick = (productId: string, status: string) => {
		if (status === 'SOLD_OUT') {
			navigate(`/sales/detail/${productId}?status=${status}`);
		} else {
			navigate(`/sales/expired/detail/${productId}?status=${status}`);
		}
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

	if (data) {
		return (
			<>
				{data.length === 0 ? (
					<>
						<div className="h-screen flex items-center justify-center text-lg text-descGray pb-36">
							판매완료된 상품이 없습니다.
						</div>
					</>
				) : (
					<div className="pb-[80px]">
						{data.map((item) => (
							<div key={item.productId}>
								<BottomSheet
									isOpen={bottom}
									onClose={closeBottom}
									viewHeight="220px"
								>
									<ContentTwoBtnPage
										title="판매 정보를 삭제하시겠습니까?"
										leftBtn="취소"
										rightBtn="삭제"
										leftBtnFunc={closeBottom}
										rightBtnFunc={delSalesProd}
									/>
								</BottomSheet>

								<div className="p-5">
									<div className="pb-4 flex justify-between items-center ">
										<p className="text-sm ">
											골든티켓 등록번호 {item.productId}
										</p>
										<div>
											<img
												src="/assets/images/delete.svg"
												alt="삭제하기"
												className="cursor-pointer"
												onClick={() => openBottom(item.productId)}
											/>
										</div>
									</div>
									<div className="flex justify-between">
										<div className="flex">
											<img
												src={item.accommodationImage}
												alt="image"
												className="w-[80px] h-[80px] rounded-md"
											/>
											<div className=" px-[10px] flex flex-col justify-between">
												<div>
													<p className="text-lg font-bold">
														{item.accommodationName}
													</p>
													<div className="flex">
														<p className="text-lg pr-[8px]">{item.roomName}</p>
														<div className="flex items-center">
															<div className="border-r-2 border-borderGray h-[12px]"></div>
														</div>
														<p className="text-lg pl-[8px]">
															{item.standardNumber}인/최대 {item.maximumNumber}
															인
														</p>
													</div>
												</div>

												<div className="text-lg font-bold ">
													{formatNumber(item.goldenPrice)}원
												</div>
											</div>
										</div>

										<div className="">
											<div className=" text-sm flex flex-col items-centertext-center justify-between h-[80px]">
												{item.productStatus === 'SOLD_OUT' ? (
													<p className="flex items-center justify-center  bg-main text-white rounded-[10px] w-[55px] h-[20px] p-[5px] ">
														{productStatusTrans(item.productStatus)}
													</p>
												) : (
													<p className="flex items-center justify-center  bg-lightGray border-[1px] border-[#e0e0e0] bg-lightGray border-[1px] border-[#e0e0e0]  rounded-[10px] w-[55px] h-[20px] p-[5px] ">
														{productStatusTrans(item.productStatus)}
													</p>
												)}

												<div className="flex justify-end">
													<ArrowForwardIosIcon
														sx={{ width: '15px' }}
														className="cursor-pointer"
														onClick={() =>
															detailClick(
																String(item.productId),
																item.productStatus,
															)
														}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="border-b border-borderGray"></div>
							</div>
						))}
					</div>
				)}
			</>
		);
	}

	return <div> {error && <NotFoundPage />} </div>;
};

export default SoldListProd;
