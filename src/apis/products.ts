import instance from './axios';

export const registerProduct = async (
	reservationId: string,
	requestData: { goldenPrice: number; content: string },
) => {
	try {
		const response = await instance.post(
			`/products/${reservationId}`,
			requestData,
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw new Error('상품 등록 실패');
	}
};

// 상품 수정 API
export const putEditProd = async (
	productId: string,
	goldenPrice: number,
	content: string | null,
) => {
	try {
		const res = await instance.put(`products/${productId}`, {
			goldenPrice: goldenPrice,
			content: content,
		});
		return res.data;
	} catch (error) {
		console.error(error);
		throw new Error('상품 수정 실패 ');
	}
};
