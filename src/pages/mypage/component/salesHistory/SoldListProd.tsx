import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useQuerySoldList } from '../../../../hooks/useQuerySales';
import { productStatusTrans } from '../../../../utils/translate';
import { formatNumber } from '../../../../utils/formate';

// 판매완료 리스트
const SoldListProd = () => {
	const { isLoading, error, data } = useQuerySoldList();

	console.log('판매완료 리스투', data);
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;

	const [bottom, setBottom] = useState(false);

	const openBottom = () => {
		setBottom(true);
	};

	const closeBottom = () => {
		setBottom(false);
	};

	// 판매 완료 - 판매완료 상품 삭제 API
	const delSalesProd = () => {
		console.log('판매완료 상품 삭제 완료');
		closeBottom();
	};

	// 판매 완료 상세 클릭 (만료, 완료 나누기)
	const detailClick = (productId: string) => {
		if (currentPath === '/sales') {
			console.log('클릭');
			navigate(`/sales/detail/${productId}`);
		}
	};

	if (isLoading) {
		return <div> isLoading </div>;
	}

	if (!data) {
		return <div> 판매 완료 된 상품 없다 ~ </div>;
	}
	if (data) {
		return (
			<>
				<BottomSheet isOpen={bottom} onClose={closeBottom} viewHeight="220px">
					<ContentTwoBtnPage
						title="판매 정보를 삭제하시겠습니까?"
						leftBtn="취소"
						rightBtn="삭제"
						leftBtnFunc={closeBottom}
						rightBtnFunc={delSalesProd}
					/>
				</BottomSheet>

				{data.map((item) => (
					<div key={item.productId}>
						<div className="p-5">
							<div className="pb-5 flex justify-between items-center ">
								<p className="text-sm ">골든티켓 등록번호 {item.productId}</p>
								<div>
									<img
										src="/assets/images/delete.svg"
										alt="삭제하기"
										className="cursor-pointer"
										onClick={openBottom}
									/>
								</div>
							</div>
							<div className="flex">
								<img
									src={item.accommodationImage}
									alt="image"
									className="w-[80px] h-[80px]"
								/>
								<div className="w-[60%] px-[10px]">
									<p className="text-lg font-bold">{item.accommodationName}</p>
									<div className="flex">
										<p className="text-lg pr-[8px]">{item.roomName}</p>
										<div className="flex items-center">
											<div className="border-r-2 border-borderGray h-[12px]"></div>
										</div>
										<p className="text-lg pl-[8px]">
											{item.standardNumber}인/최대 {item.maximumNumber}인
										</p>
									</div>
									<p className="text-lg font-bold pt-[15px]">
										{formatNumber(item.goldenPrice)}
									</p>
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
												onClick={() => detailClick(String(item.productId))}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="border-b border-borderGray"></div>
					</div>
				))}
			</>
		);
	}

	return <div> 오류오류 </div>;
};

export default SoldListProd;
