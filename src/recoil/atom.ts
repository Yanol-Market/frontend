import { atom } from 'recoil';
import { messageType } from '../pages/chat/Chat.page';
import instance from '../apis/axios';

export const startState = atom({
	key: 'startDate',
	default: new Date(),
});
export const endState = atom({
	key: 'endDate', //
	default: new Date(),
});
export const checkedState = atom({
	key: 'checkedState',
	default: 0,
});

export const checkedListState = atom({
	key: 'checkedListState',
	default: [] as string[],
});

export interface SelectBanksProps {
	id: number;
	bankName: string;
	image: string;
}

export const checkedBankState = atom<SelectBanksProps | null>({
	key: 'checkedBankState',
	default: null,
});

// chat

export const messageState = atom<messageType | null>({
	key: 'messageState',
	default: null,
});

export const negoState = atom<string>({
	key: 'negoState',
	default: 'false',
});

export const productPriceState = atom<number | null>({
	key: 'productPrice',
	default: 0,
});

export const negoIdState = atom<number | null>({
	key: 'negoIdState',
	default: 4,
});

export const negoSuccessState = atom<boolean | null>({
	key: 'negoSuccessState',
	default: false,
});

export const sendMessage = async (data: messageType) => {
	try {
		const response = await instance.post(
			'https://golden-ticket.site/chats/test',
			data,
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const receiverNicknameState = atom<string>({
	key: 'receiverNicknameState',
	default: '',
});

export const userNameState = atom<string>({
	key: 'userNameState',
	default: '',
});

export const productIdState = atom<number>({
	key: 'productIdState',
	default: 0,
});

export const buyerIdState = atom<number>({
	key: 'buyerIdState',
	default: 0,
});

export const sellerIdState = atom<number>({
	key: 'sellerIdState',
	default: 0,
});

export const userIdState = atom<number>({
	key: 'userIdState',
	default: 0,
});

export const offeredPriceState = atom<number>({
	key: 'offeredPriceState',
	default: 0,
});
