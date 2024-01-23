import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { PaymentProps } from '../pages/reservation/Product';

const { persistAtom } = recoilPersist();
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
