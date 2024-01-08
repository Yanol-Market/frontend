import React, { useState } from 'react';

interface SellerInfoInputProps {
	onSellerInfoChange: (info: string) => void;
}

const SellerInfoInput: React.FC<SellerInfoInputProps> = ({
	onSellerInfoChange,
}) => {
	const [sellerComment, setSellerComment] = useState<string>('');

	const setSellerInfo = (info: string) => {
		// 필요에 따라 상태 업데이트 로직 추가
		onSellerInfoChange(info);
	};
	return (
		<div className="mt-5">
			<h3 className="text-body font-semibold text-black ">판매자 한마디</h3>
			<p className="mt-3 text-m">판매를 위한 상품 설명을 적어주세요</p>
			<textarea
				id="sellerComment"
				className="mt-4 w-full h-[120px] p-3 border border-borderGray rounded-md focus:outline-none focus:border-primary"
				placeholder=" "
				value={sellerComment}
				onChange={(e) => {
					setSellerComment(e.target.value);
					setSellerInfo(e.target.value); // 수정된 부분
				}}
			/>
		</div>
	);
};

export default SellerInfoInput;
