import React, { useState } from 'react';

interface SellerInfoInputProps {
	onSellerInfoChange: (info: string) => void;
}

const SellerInfoInput = ({ onSellerInfoChange }: SellerInfoInputProps) => {
	const [sellerComment, setSellerComment] = useState<string>('');
	const maxCharCount = 500; // 최대 글자 수

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const inputText = e.target.value;

		if (inputText.length <= maxCharCount) {
			setSellerComment(inputText);
			console.log('Content in SellerInfoInput:', inputText);
			onSellerInfoChange(inputText);
		}
	};
	return (
		<div className="mt-5">
			<h3 className="text-body font-semibold text-black ">판매자 한마디</h3>
			<p className="mt-3 text-m">판매를 위한 상품 설명을 적어주세요</p>
			<div style={{ position: 'relative' }}>
				<textarea
					id="sellerComment"
					className="mt-3 w-full h-[9.375rem] p-3 border border-borderGray rounded-xl focus:outline-none focus:border-primary"
					placeholder=" "
					value={sellerComment}
					onChange={handleInputChange}
					style={{ resize: 'none', overflow: 'hidden' }}
				/>
				<p
					className=" text-m text-borderGray"
					style={{
						position: 'absolute',
						bottom: '16px', // 조절하여 원하는 위치에 맞게 설정
						right: '15px', // 조절하여 원하는 위치에 맞게 설정
					}}
				>
					{sellerComment.length}/{maxCharCount}
				</p>
			</div>
		</div>
	);
};

export default SellerInfoInput;
