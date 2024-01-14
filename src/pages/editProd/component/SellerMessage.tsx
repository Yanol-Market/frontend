import React, { useState } from 'react';

interface SellerMessageProps {
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const SellerMessage = ({ setContent }: SellerMessageProps) => {
	const [count, setCount] = useState<number>(0);

	const onTextareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const inputValue = e.target.value;
		const charCount = inputValue.replace(
			/[\0-\x7f]|([0-\u07ff]|(.))/g,
			'$&$1$2',
		).length;

		setContent(inputValue);
		setCount(charCount);
	};
	return (
		<div className="mt-5">
			<h3 className="text-body font-semibold text-black ">판매자 한마디</h3>
			<p className="mt-3 text-m">판매를 위한 상품 설명을 적어주세요</p>
			<div className="p-1 mt-4 w-full h-[150px] border border-borderGray rounded-md  focus:border-primary">
				<textarea
					id="sellerComment"
					className="text-m resize-none h-[120px] w-full focus:outline-none focus:border-primary"
					maxLength={500}
					onChange={onTextareaHandler}
				/>
				<p className="text-m w-full flex items-end justify-end text-borderGray">
					{count}/500자
				</p>
			</div>
		</div>
	);
};

export default SellerMessage;
