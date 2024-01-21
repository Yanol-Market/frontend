import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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

export interface MyAccountProps {
	data:{
		accountNumber: string;
		bankImage?: string;
		bankName: string;
		name: string;
	}
	
}
export const myAccountState = atom<MyAccountProps | null>({
	key: 'myAccountState',
	default: null,
	// effects_UNSTABLE: [persistAtom],
});
