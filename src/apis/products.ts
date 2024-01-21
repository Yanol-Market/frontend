import instance from './axios';

interface ProductRegistrationResponse {
	status: string;
	message: string;
	data: number | null;
}

export const registerProduct = async (
	reservationId: string,
	requestData: { goldenPrice: number; content: string },
): Promise<ProductRegistrationResponse> => {
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
