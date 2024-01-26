import React, { useState } from 'react';
import instance from '../../apis/axios';
import {
	chatRoomIdState,
	negoIdState,
	negoState,
	productIdState,
	productPriceState,
	userIdState,
} from '../../recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

interface NegoPanelProps {
	setOffered: (value: boolean) => void;
}

const NegoPanel: React.FC<NegoPanelProps> = ({ setOffered }) => {
	const userId = useRecoilValue(userIdState);
	const productId = useRecoilValue(productIdState);
	const [productPrice, setProductPrice] = useRecoilState<string | null>(
		productPriceState,
	);
	const [nego, setNego] = useRecoilState(negoState);

	const [_, setNegoId] = useRecoilState<number | null>(negoIdState);
	const chatRoomId = useRecoilValue(chatRoomIdState);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setProductPrice(event.target.value);
	};

	const priceUp = () => {
		setProductPrice((prev) => String((Number(prev) ?? 0) + 5000));
	};

	const priceDown = () => {
		if (productPrice !== null && Number(productPrice) > 5000) {
			setProductPrice((prev) => String(Number(prev) - 5000));
		}
	};

	const negoSend = () => {
		instance
			.post(`/nego/proposePrice/${productId}`, {
				price: productPrice,
			})
			.then((response) => {
				setNegoId(response.data.id);
				console.log(response.data.id, response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const sendMessage = async (data: MessageType) => {
		try {
			const response = await instance.post(
				'https://golden-ticket.site/chats/test',
				data,
			);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const makeOffer = () => {
		if (confirm('상품당 2회의 네고 제안이 가능합니다.')) {
			negoSend();
			const data = {
				chatRoomId,
				senderType: 'BUYER',
				userId: userId,
				content: `${productPrice?.toLocaleString()} 원에 구매 가능할까요?`,
			};

			console.log(data);

			sendMessage(data);
			setOffered(true);
			setNego(false);
		} else return;
	};

	return (
		<div className="text-lg">
			<div className="absolute z-50 fixed top-0 h-[100%] w-[430px] bg-black opacity-75"></div>
			<div className="absolute z-50 animate-slide-up bottom-0 h-[270px] w-[100%] bg-white rounded-t-[20px] leading-tight tracking-tight">
				<div>
					<button
						onClick={() => setNego(false)}
						className="absolute top-[30px] right-[20px]"
					>
						<img src="/assets/images/closeModal.svg" alt="" />
					</button>
					<p className="p-[30px] text-center">네고가격제안</p>
					<div className="flex px-[20px]">
						<p className="flex justify-center items-center w-[20%]">네고가격</p>
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
										type="text"
										onChange={(event) => handleChange(event)}
										value={productPrice ?? ''}
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

				<div className="absolute bottom-0 h-[110px] w-[430px]">
					<div
						onClick={makeOffer}
						className="w-[90%] bottom-[25px] text-lg cursor-pointer m-[20px] h-[42px] bg-main rounded-[12px] text-white flex items-center justify-center"
					>
						제시하기
					</div>
				</div>
			</div>
		</div>
	);
};

export default NegoPanel;

interface MessageType {
	chatRoomId: number;
	senderType: string;
	userId: number;
	content: string;
}
