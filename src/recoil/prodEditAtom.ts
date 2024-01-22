import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type editProdData = {
	yanolja: number;
	origin: number;
	golden: number;
};

export const editProdState = atom<editProdData>({
	key: 'editProdState',
	default: { yanolja: 0, origin: 0, golden: 0 },
	effects_UNSTABLE: [persistAtom],
});
