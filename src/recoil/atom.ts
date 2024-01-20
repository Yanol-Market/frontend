import { atom } from 'recoil';
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
export const selectOptionState = atom({
	key: 'SelectOptionState',
	default: 'ALL',
});
export const searchInputState = atom({
	key: 'SearchInputState',
	default: '',
});
