export interface BuyingProd {
	productId: number;
	accommodationImage: string;
	accommodationName: string;
	reservationType: string;
	roomName: string;
	standardNumber: number;
	maximumNumber: number;
	checkInTime: string;
	checkOutTime: string;
	checkInDate: string;
	checkOutDate: string;
	goldenPrice: number;
	status: string;
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage: string;
	price: number;
	lastUpdatedAt: string;
}

// 구매중 조회 api
export interface ApiBuyingProd {
	status: string;
	message: string;
	data: BuyingProd[];
}

// 구매완료 리스트 조회 api
export interface ApiBoughtProd {
	status: string;
	message: string;
	data: BoughtProd[];
}

// 구매완료 상세 페이지 조회 api
export interface ApiBoughtDetailProd {
	status: string;
	message: string;
	data: BoughtDetailProd;
}

export interface BoughtDetailProd {
	productId: number;
	accommodationImage: string;
	accommodationName: string;
	roomName: string;
	reservationType: string;
	standardNumber: number;
	maximumNumber: number;
	checkInTime: string;
	checkOutTime: string;
	checkInDate: string;
	checkOutDate: string;
	price: number;
	buyerName: string;
	buyerPhoneNumber: string;
	buyerEmail: string;
	completedDate: string;
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage: string;
	lastUpdatedAt: string;
}

// 구매 완료 리스트
export interface BoughtProd {
	productId: number;
	accommodationImage: string;
	accommodationName: string;
	reservationType: string;
	roomName: string;
	standardNumber: number;
	maximumNumber: number;
	goldenPrice: number;
}

export interface CardProdProps {
	accommodationImage: string;
	accommodationName: string;
	reservationType: string;
	roomName: string;
	standardNumber: number;
	maximumNumber: number;
	checkInTime: string;
	checkOutTime: string;
	checkInDate: string;
	checkOutDate: string;
	goldenPrice: number;
}

export interface StatusBarProps {
	status: string;
}

export interface BuyerProps {
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage: string;
	price: number;
	lastUpdatedAt: string;
	status?: string;
}

// 구매 내역-구매중-조회 API
export const BuyingRes: ApiBuyingProd = {
	status: 'SUCCESS',
	message: '상품이 성공적으로 조회가 완료되었습니다.',
	data: [
		{
			productId: 1,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명',
			reservationType: 'STAY',
			roomName: '객실명',
			standardNumber: 2,
			maximumNumber: 4,
			checkInTime: '14:00:00',
			checkOutTime: '12:00:00',
			checkInDate: '2024-01-10',
			checkOutDate: '2024-01-15',
			goldenPrice: 100000,
			status: 'NEGOTIATING',
			chatRoomId: 1,
			receiverNickname: '닉네임1',
			receiverProfileImage: '/assets/images/userDefault.svg',
			price: 90000,
			lastUpdatedAt: '2024-01-10T14:00:00',
		},
		{
			productId: 2,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명2',
			reservationType: 'STAY',
			roomName: '객실명2',
			standardNumber: 2,
			maximumNumber: 4,
			checkInTime: '14:00:00',
			checkOutTime: '12:00:00',
			checkInDate: '2024-01-10',
			checkOutDate: '2024-01-15',
			goldenPrice: 100000,
			status: 'PAYMENT_PENDING',
			chatRoomId: 2,
			receiverNickname: '닉네임2',
			receiverProfileImage: '/assets/images/userDefault.svg',
			price: 90000,
			lastUpdatedAt: '2024-01-10T14:00:00',
		},
		{
			productId: 3,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명3',
			reservationType: 'STAY',
			roomName: '객실명3',
			standardNumber: 2,
			maximumNumber: 4,
			checkInTime: '14:00:00',
			checkOutTime: '12:00:00',
			checkInDate: '2024-01-10',
			checkOutDate: '2024-01-15',
			goldenPrice: 100000,
			status: 'TRANSFER_PENDING',
			chatRoomId: 3,
			receiverNickname: '닉네임3',
			receiverProfileImage: '/assets/images/userDefault.svg',
			price: 90000,
			lastUpdatedAt: '2024-01-10T14:00:00',
		},
	],
};

// 구매 내역-구매완료-리스트-조회 API
export const BoughtListRes: ApiBoughtProd = {
	status: 'SUCCESS',
	message: '상품이 성공적으로 조회가 완료되었습니다.',
	data: [
		{
			productId: 1,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명',
			reservationType: 'STAY',
			roomName: '객실명',
			standardNumber: 2,
			maximumNumber: 4,

			goldenPrice: 100000,
		},
		{
			productId: 2,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명2',
			reservationType: 'STAY',
			roomName: '객실명2',
			standardNumber: 2,
			maximumNumber: 4,
			goldenPrice: 100000,
		},
		{
			productId: 3,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명3',
			reservationType: 'STAY',
			roomName: '객실명3',
			standardNumber: 2,
			maximumNumber: 4,
			goldenPrice: 100000,
		},
	],
};

// 구매 내역-구매완료-리스트-조회 API
export const BoughtDetailRes: ApiBoughtDetailProd = {
	status: 'SUCCESS',
	message: '상품이 성공적으로 조회가 완료되었습니다.',
	data: {
		productId: 55555,
		accommodationImage: '/assets/images/reserveRoom.svg',
		accommodationName: '숙소명',
		roomName: '객실명',
		reservationType: 'STAY',
		standardNumber: 2,
		maximumNumber: 4,
		checkInTime: '14:00:00',
		checkOutTime: '12:00:00',
		checkInDate: '2024-01-10',
		checkOutDate: '2024-01-15',
		price: 100000,
		buyerName: '구매자 이름',
		buyerPhoneNumber: '구매자 전화번호',
		buyerEmail: '구매자 이메일',
		completedDate: '2024-01-01T01:01:01',
		chatRoomId: 45654,
		receiverNickname: '닉네임1',
		receiverProfileImage: '/assets/images/userDefault.svg',
		lastUpdatedAt: '2024-01-10T14:00:00',
	},
};
