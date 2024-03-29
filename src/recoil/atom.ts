import { atom } from 'recoil';
import { messageType } from '../pages/chat/Chat.page';
import instance from '../apis/axios';
import { recoilPersist } from 'recoil-persist';
import { PaymentProps } from '../pages/reservation/Product';
import { ProductData } from '../pages/chat/Chat.page';

const { persistAtom } = recoilPersist({
	key: 'localStorageRecoil',
	storage: localStorage,
});
const toDay = new Date();
const sevenDaysLater = new Date();
sevenDaysLater.setDate(toDay.getDate() + 6);

export const startState = atom({
	key: 'startDate',
	default: toDay,
});
export const endState = atom({
	key: 'endDate', //
	default: sevenDaysLater,
});
export const checkedState = atom({
	key: 'checkedState',
	default: 'FULL_RANGE',
});

export const checkedListState = atom({
	key: 'checkedListState',
	default: [] as string[],
	effects_UNSTABLE: [persistAtom],
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

export const negoState = atom<boolean>({
	key: 'negoState',
	default: false,
});

export const productPriceState = atom<string | null>({
	key: 'productPrice',
	default: '',
});

export const negoIdState = atom<number | null>({
	key: 'negoIdState',
	default: 0,
});

export const negoSuccessState = atom<boolean | null>({
	key: 'negoSuccessState',
	default: false,
});

export const sendMessage = async (data: messageType) => {
	try {
		const response = await instance.post('/chats/test', data);
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
export interface MyAccountProps {
	data: {
		accountNumber: string;
		bankImage?: string;
		bankName: string;
		name: string;
	};
}
export const myAccountState = atom<MyAccountProps | null>({
	key: 'myAccountState',
	default: null,
});

export const paymentsState = atom<PaymentProps | null>({
	key: 'PaymentsState',
	default: null,
});
export const selectOptionState = atom({
	key: 'SelectOptionState',
	default: 'ALL',
});
export const searchInputState = atom({
	key: 'SearchInputState',
	default: '',
});

export const chatStatusState = atom({
	key: 'ChatStatusState',
	default: '',
});

export const chatRoomIdState = atom({
	key: 'ChatRoomIdState',
	default: 0,
});

export const productStatusState = atom({
	key: 'ProductStatusState',
	default: '',
});

export const withDrawlState = atom<string | null>({
	key: 'withDrawlState',
	default: null,
});

export const productDataState = atom<ProductData>({
	key: 'productDataState',
	default: {
		accommodationImage: '',
		accommodationName: '',
		roomName: '',
		checkInDate: '',
		checkOutDate: '',
		checkInTime: '',
		checkOutTime: '',
		price: 0,
		productStatus: '',
		checkInOut: '',
		receiverId: '',
		receiverNickname: '',
		productId: 0,
	},
});

export const isShowState = atom<boolean>({
	key: 'isShow',
	default: false,
});
export const dateRefState = atom({
	key: 'dateRefState',
	default: null,
});

export const negoAvailableState = atom<boolean>({
	key: 'negoAvailableState',
	default: false,
});
