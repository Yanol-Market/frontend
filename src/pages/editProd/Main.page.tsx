import React, { useState } from 'react';
import { Header } from '../../component/common/Header';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import GoldenPriceInfo from './GoldenPriceInfo';
import SellerMessage from './SellerMessage';
import FeeInfo from './FeeInfo';

const EditProd = () => {
	const { productId } = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const yanoljaPrice = searchParams.get('yanoljaPrice');
	const originPrice = searchParams.get('originPrice');

	const [goldenPrice, setGoldenPrice] = useState<number>(0);
	const [content, setContent] = useState<string>(' ');

	// 수정 API 연결
	const handleEdit = () => {
		console.log('상품 수정 완료 ');
	};
	return (
		<div>
			<Header title={'판매 상품 수정 '} />{' '}
			<div className="p-5">
				<GoldenPriceInfo
					setGoldenPrice={setGoldenPrice}
					originPrice={originPrice}
					yanoljaPrice={yanoljaPrice}
				/>
				<SellerMessage setContent={setContent} />
				<FeeInfo goldenPrice={goldenPrice} />
				<button
					onClick={handleEdit}
					className="bg-main text-white flex items-center justify-center h-[50px] w-full rounded-lg mt-5"
				>
					수정 완료
				</button>
			</div>
		</div>
	);
};

export default EditProd;
