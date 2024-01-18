import React, { useState } from 'react';
import instance from '../../apis/axios';

const NegoPanel: React.FC<NegoPanelProps> = ({
	chatList,
	setChatList,
	setNego,
	setOffered,
	productData,
}) => {
	const initialPrice = 170000;

	const [price, setPrice] = useState(initialPrice);

	const priceUp = () => {
		setPrice((prev) => prev + 5000);
	};

	const priceDown = () => {
		setPrice((prev) => prev - 5000);
	};

	const negoSend = () => {
		instance
			.post(`/nego/proposePrice/${productData.productId}`, {
				price: { price },
			})
			.then((response) => console.log(response));
	};

	const makeOffer = () => {
		if (confirm('상품당 2회의 네고 제안이 가능합니다.')) {
			// 네고 생성 productId, price
			negoSend();

			setOffered(true);
			setNego(false);
			setChatList([
				...chatList,
				{
					userId: false,
					id: chatList.length + 1,
					message: `${price.toLocaleString('ko-KR')}원에 구매 가능할까요?`,
					timestamp: new Date(),
					messageType: 'user',
				},
			]);
		} else return;
	};

	return (
		<div className="text-lg">
			<div className="absolute z-50 fixed top-0 h-[100%] w-[375px] bg-black opacity-75"></div>
			<div className="absolute z-50 animate-slide-up bottom-0 h-[270px] w-[375px] bg-white rounded-t-[20px] leading-tight tracking-tight">
				<div>
					<button
						onClick={() => setNego(false)}
						className="absolute top-[30px] right-[20px]"
					>
						<img src="/assets/images/closeModal.svg" alt="" />
					</button>
					<p className="p-[30px] text-center">네고가격제안</p>
					<div className="flex px-[20px]">
						<p className="flex justify-center items-center w-[15%]">네고가격</p>
						<div className="w-[85%]">
							<div className="flex h-[42px] w-[246px] ml-[30px]">
								<button
									onClick={priceDown}
									className="w-[40px] bg-[#E5E5E5] rounded-l-[12px] hover:bg-[#FFF3C5]"
								>
									-
								</button>
								<div className="flex-1 text-body flex justify-center items-center bg-[#fafafa]">
									<input
										type="number"
										value={price}
										className="w-[166px] text-center text-gray-800 bg-white p-2.5 rounded"
									/>
									<style>{`
										input[type='number']::-webkit-inner-spin-button,
										input[type='number']::-webkit-outer-spin-button {
											-webkit-appearance: none;
											margin: 0;
										}

										input[type='number'] {
											-moz-appearance: textfield; /* Firefox */
										}
									`}</style>
								</div>
								<button
									onClick={priceUp}
									className="w-[40px] bg-[#E5E5E5] rounded-r-[12px] hover:bg-[#FFF3C5]"
								>
									+
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 h-[110px]">
					<div
						onClick={makeOffer}
						className="w-[335px] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						제시하기
					</div>
				</div>
			</div>
		</div>
	);
};

export default NegoPanel;

interface ChatItemType {
	userId: boolean;
	id: number;
	message: string;
	timestamp: Date;
	messageType: string;
}

interface NegoPanelProps {
	setNego: (value: boolean) => void;
	setChatList: (value: ChatItemType[]) => void;
	chatList: ChatItemType[];
	setOffered: (value: boolean) => void;
	offered: boolean;
	productData: ProductData;
}

interface ProductData {
	productId: number;
	image: string;
	productName: string;
	productCondition: string;
	price: string;
	checkInOut: string;
}
