export const productStatusTrans = (status: string) => {
	if (status === 'SOLD_OUT') {
		return '판매완료';
	} else {
		return '상품만료';
	}
};

export const reservationTypeTrans = (status: string) => {
	if (status === 'STAY') {
		return '숙박';
	} else if (status === '상품만료') {
		return '상품만료';
	} else {
		return '대실';
	}
};

export const reservationStatusTrans = (status: string) => {
	if (status === 'REGISTERED') {
		return true;
	} else {
		return false;
	}
};
