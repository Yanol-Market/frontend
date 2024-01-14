import React, { useState } from 'react';
import { BottomSheet } from '../../../../component/common/BottomSheet';
import ContentTwoBtnPage from '../../../../component/common/BottomSheet/Content/ContentTwoBtnPage';
import { useNavigate } from 'react-router';

interface SellingBottomProps {
	setBottom: React.Dispatch<React.SetStateAction<boolean>>;
	productId: number;
	yanoljaPrice: number;
	goldenPrice: number;
}

const SellingBottom = ({
	setBottom,
	productId,
	yanoljaPrice,
	goldenPrice,
}: SellingBottomProps) => {
	const navigate = useNavigate();
	const [isBottom, setIsBottom] = useState(false);

	const closeBottom = () => {
		setIsBottom(false);
		setBottom(false); /* 수정하기, 삭제하기 바텀시트 */
	};

	const handleDelete = () => {
		setIsBottom(true);
	};

	// 삭제하기 API
	const delProd = () => {
		console.log('판매중 상품 삭제 완료');
		closeBottom(); /* 삭제하기 예, 아니요 바텀시트 닫기 */
		setBottom(false); /* 수정하기, 삭제하기 바텀시트 */
	};

	console.log('yanoljaPrice', yanoljaPrice);
	// 수정하기 페이지로 이동
	const handleEdit = () => {
		navigate(
			`/edit/${productId}?yanoljaPrice=${yanoljaPrice}&goldenPrice=${goldenPrice}`,
		);
		console.log('판매중 상품 수정 완료');
	};
	return (
		<>
			<BottomSheet isOpen={isBottom} onClose={closeBottom} viewHeight="200px">
				<ContentTwoBtnPage
					title="판매 정보를 삭제하시겠습니까?"
					leftBtn="취소"
					rightBtn="삭제"
					leftBtnFunc={closeBottom}
					rightBtnFunc={delProd}
				/>
			</BottomSheet>

			<div className="w-full h-full flex flex-col justify-around items-center">
				<div className="cursor-pointer" onClick={handleEdit}>
					수정하기
				</div>
				<div className="text-red cursor-pointer" onClick={handleDelete}>
					삭제하기
				</div>
			</div>
		</>
	);
};

export default SellingBottom;
