import React, { useState } from 'react';
import { Header } from '../../component/common/Header';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import GoldenPriceInfo from './component/GoldenPriceInfo';
import SellerMessage from './component/SellerMessage';
import FeeInfo from './component/FeeInfo';
import { useRecoilValue } from 'recoil';
import { editProdState } from '../../recoil/prodEditAtom';
import { putEditProd } from '../../apis/products';

const EditProd = () => {
	const { productId } = useParams();
	const navigate = useNavigate();
	const price = useRecoilValue(editProdState);
	console.log(price.golden);

	// 희망판매가 = 골든특가
	const [goldenPrice, setGoldenPrice] = useState<number>(price.golden);
	// 판매자 한마디
	const [content, setContent] = useState<string>(' ');

	// 수정 API 연결
	const handleEdit = async () => {
		if (productId) {
			try {
				const res = await putEditProd(productId, goldenPrice, content);
				console.log('상품 수정 성공', res);
				alert('상품 수정에 성공했습니다 !');
			} catch (e) {
				console.log('상품 수정 실패', e);
				alert('상품 수정에 실패했습니다. 전 페이지로 돌아가주세요.');
			}
		}
		navigate(-1);
	};

	return (
		<div>
			<Header title={'판매 상품 수정 '} />{' '}
			<div className="p-5">
				<GoldenPriceInfo
					goldenPrice={goldenPrice}
					setGoldenPrice={setGoldenPrice}
					originPrice={price.origin}
					yanoljaPrice={price.yanolja}
				/>
				<SellerMessage setContent={setContent} />
				<FeeInfo goldenPrice={Number(goldenPrice)} />
				<button
					onClick={handleEdit}
					className={`  flex items-center justify-center h-[50px] w-full rounded-lg mt-5 ${
						goldenPrice > 0 && goldenPrice < price.origin
							? 'cursor-pointer bg-main text-white'
							: 'cursor-not-allowed bg-borderGray text-descGray'
					}`}
				>
					수정 완료
				</button>
			</div>
		</div>
	);
};

export default EditProd;
