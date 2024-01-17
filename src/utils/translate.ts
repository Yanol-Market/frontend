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
	} else {
		return '대실';
	}
};
