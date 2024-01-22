import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../../apis/detail';
import { formatDate } from '../../../utils/b';
import { FormatLimitText } from '../../../utils/formate';
import { addWish } from '../../../apis/wish';
import { deleteWish } from '../../../apis/wish';
import { useRecoilState } from 'recoil';
import { getPaymentsDetail } from '../../../apis/paymentsDetail';
import { paymentsState } from '../../../recoil/atom';

type ProductDetailType = {
	isWished: boolean;
	isSeller: boolean;
	accommodationImage: string;
	accommodationName: string;
	accommodationAddress: string;
	reservationType: string;
	roomName: string;
	standardNumber: number;
	maximumNumber: number;
	checkInTime: string;
	checkOutTime: string;
	checkInDate: string;
	checkOutDate: string;
	nights: number;
	days: number;
	originPrice: number;
	yanoljaPrice: number;
	goldenPrice: number;
	originPriceRatio: number;
	marketPriceRatio: number;
	content: string;
	productStatus: string;
	wishId: number;
};

export const ProductInfo = () => {
	const navigate = useNavigate();
	const param = useParams();
	const [isWished, setIsWished] = useState(false);
	const [isSeller, setIsSeller] = useState(false);
	const [checkInDate, setCheckInDate] = useState<string | undefined>();
	const [checkOutDate, setCheckOutDate] = useState<string | undefined>();
	const [product, setProduct] = useState<ProductDetailType>();
	const [payData, setPayData] = useRecoilState(paymentsState);

	const fetchData = async () => {
		const data = await getProduct(param?.productId);
		setCheckInDate(formatDate(data.data.checkInDate));
		setCheckOutDate(data.data.checkOutDate);
		setProduct(data.data);
		setIsWished(data.data.isWished);
		setIsSeller(data.data.isSeller);
	};
	console.log(product);
	const handleClickButton = (link: string) => {
		const isLogin = false;
		if (isLogin) {
			navigate('/login');
		}

		navigate(link);
	};
	const handleClickHeart = async (productId: number) => {
		if (!isWished) {
			addWish(productId);
			setIsWished(true);
		}
		if (isWished) {
			deleteWish(product?.wishId as number);
			setIsWished(false);
		}
	};
	const handleClickPayMentsButton = async (link: string) => {
		const isLogin = false;
		if (isLogin) {
			navigate('/login');
		}
		try {
			const payData = await getPaymentsDetail(param?.productId);
			console.log(payData);
			setPayData(payData.data);
			navigate(link);
		} catch (error) {
			throw new Error('결제 상세페이지 이동 실패');
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	if (!product) {
		return <div>Loading...</div>;
	}
	return (
		<div className="">
			<div className="relative mb-5">
				<img
					className="w-full h-[205px]"
					src={product.accommodationImage}
					alt="productImg"
				/>
				<p className="absolute top-0 rounded-br-[5px] text-m font-semibold text-white bg-subBtn px-2 py-1">
					D-{product.days}
				</p>
			</div>
			<div className="px-5 mb-[13px]">
				<div className="flex justify-between">
					<p className="text-black text-headline2 font-semibold">
						{product.accommodationName}
					</p>
					<button
						onClick={() => {
							handleClickHeart(Number(param.productId));
						}}
					>
						<img
							src={`/assets/images/${isWished ? 'Fill' : ''}heart_xl.svg`}
							alt="heartIcon"
						/>
					</button>
				</div>
				<p className="text-black text-headline2 font-medium">
					{product.roomName}
				</p>
			</div>
			<div className="px-5 flex justify-between">
				<div className="flex item-center mb-5">
					<p className="py-1 px-2  rounded-[20px] border-[1px] border-solid border-borderGray bg-lightGray text-sm text-black mr-[6px]">
						숙박
					</p>
					<p className="text-m text-black m-auto ">{`기존 ${product.standardNumber}명/최대 ${product.maximumNumber}명`}</p>
				</div>
				<div className="flex item-center mb-5">
					<img
						className="w-[11px] mr-1"
						src="/assets/images/location_sm.svg"
						alt=""
					/>
					<p className="text-black text-m m-auto">
						{FormatLimitText(product.accommodationAddress, 20)}
					</p>
				</div>
			</div>
			<div className="flex justify-around text-center text-m bg-lightGray p-[10px] rounded-[10px] mx-5 mb-[25px]">
				<div>
					<p className="font-bold mb-[5px]">체크인</p>
					<p>{`${checkInDate} ${product.checkInTime}`}</p>
				</div>
				<div className="p-10px border-r-[1px] border-[#e0e0e0] h-[40px]"></div>
				<div>
					<p className="font-bold mb-[5px]">체크아웃</p>
					<p>{`${checkOutDate} ${product.checkOutTime}`}</p>
				</div>
			</div>
			<div className="w-full px-5 mb-5">
				<div className="flex justify-between w-[100%]">
					<p className="text-descGray font-pre text-lg">현재 야놀자 판매가</p>
					<div className="flex">
						<p className="text-descGray font-pre text-lg mr-1">
							{product.marketPriceRatio}%
						</p>
						<p className="text-descGray font-pre text-lg line-through">
							{product.yanoljaPrice.toLocaleString()}
						</p>
						<p className="text-descGray font-pre text-lg line-through">원</p>
					</div>
				</div>
				<div className="flex justify-between w-[100%]">
					<p className="text-descGray font-pre text-lg">기존 구매가</p>
					<div className="flex">
						<p className="text-descGray font-pre text-lg mr-1">
							{product.originPriceRatio}%
						</p>
						<p className="text-descGray font-pre text-lg line-through">
							{product.originPrice.toLocaleString()}
						</p>
						<p className="text-descGray font-pre text-lg line-through">원</p>
					</div>
				</div>
				<div className="flex justify-between w-[100%]">
					<p className="text-subBtn font-pre text-lg font-semibold">
						골든 특가
					</p>
					<div className="flex">
						<p className="text-subBtn font-pre text-lg font-semibold">
							{product.goldenPrice.toLocaleString()}
						</p>
						<p className="text-subBtn font-pre text-lg font-semibold">원</p>
					</div>
				</div>
			</div>
			<div>
				<div className="bg-bgMain p-5">
					<div className="mb-5">
						<div className="flex mb-[10px]">
							<p className="text-black text-lg font-semibold mr-1">
								판매자의 한마디
							</p>
							<img src="/assets/images/chat.svg" alt="chatIcon" />
						</div>
						<p className="p-5 bg-white border-[1px] border-solid border-borderGray rounded-[12px] text-m min-h-[105px]">
							{product.content}
						</p>
					</div>
					<div className="mb-[25px]">
						<div className="flex mb-[10px]">
							<p className="text-black text-lg font-semibold mr-1">
								취소 및 환불 규정
							</p>
							<img src="/assets/images/warning.svg" alt="chatIcon" />
						</div>
						<div className="p-5 bg-white min-h-[105px]  border-[1px] border-solid border-borderGray rounded-[12px] ">
							<p className="text-m font-semibold text-fontBlack">
								자세한 환불규정은 이용약관 참고 부탁드립니다.
							</p>
							<p className="text-m font-medium text-fontBlack">
								골든 티켓은 취소 불가 혹은 취소 수수료가 발생하는 이용 일자임박
								숙박 상품을 취급하고 있습니다.
								<br />
								골든티켓 상품은 결제 이후,취소 및 환불이 불가합니다.
							</p>
						</div>
					</div>
					<div>
						<div className="flex mb-5">
							<p className="text-fontBlack font-lg text-semibold mr-1">
								안전한 골든티켓 획득 과정
							</p>
							<img src="/assets/images/locked.svg" alt="lockedIcon" />
						</div>
						<div className="flex">
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								네고 진행
							</p>
							<div className="h-[2px] w-[10px] bg-main m-auto"></div>
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								결제 진행
							</p>
							<div className="h-[2px] w-[10px] bg-main m-auto"></div>
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								양도 대기
							</p>
							<div className="h-[2px] w-[10px] bg-main m-auto"></div>
							<p className="p-2 bg-white rounded-[20px] border-[1px] border-solid border-borderWhite text-fontBlack text-m">
								3시간 내 양도 완료
							</p>
						</div>
					</div>
				</div>
				<div className="flex px-5 pt-[60px] pb-[30px] justify-between">
					<button
						onClick={() => {
							handleClickButton(
								`/chat?productId=${param.productId}&sellerId=${'sellerId'}&buyerId=${'buyerId'}`,
							);
						}}
						className="p-2 w-[160px] h-[50px] rounded-[12px] text-white text-lg font-[500] bg-subBtn"
					>
						네고하기
					</button>
					<button
						onClick={() => {
							handleClickPayMentsButton(
								`/reservation?productId=${param.productId}`,
							);
						}}
						className="p-2 w-[160px] h-[50px] rounded-[12px] text-white text-lg font-[500] bg-main"
					>
						예약하기
					</button>
				</div>
			</div>
		</div>
	);
};
