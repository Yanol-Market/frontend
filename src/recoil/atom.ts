import { atom } from 'recoil';

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
