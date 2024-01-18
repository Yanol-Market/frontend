//  판매중 조회 API
export type ApiSales = {
	status: string;
	message: string;
	data: SalesResItem[] | null;
};

export type SalesResItem = {
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
	originPrice: number;
	yanoljaPrice: number;
	goldenPrice: number;
	status: string;
	chats: SalesResChatsItem[];
};

export type SalesResChatsItem = {
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage: string;
	price: number;
	status: string;
	lastUpdatedAt: string;
};

export const SalesRes: ApiSales = {
	status: 'SUCCESS',
	message: '상품이 성공적으로 조회가 완료되었습니다.',
	data: [
		{
			productId: 1,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명1',
			reservationType: 'STAY',
			roomName: '객실명',
			standardNumber: 2,
			maximumNumber: 4,
			checkInTime: '14:00:00',
			checkOutTime: '12:00:00',
			checkInDate: '2024-01-10',
			checkOutDate: '2024-01-15',
			originPrice: 120000,
			yanoljaPrice: 110000,
			goldenPrice: 100000,
			status: 'NEGOTIATING',
			chats: [
				{
					chatRoomId: 1,
					receiverNickname: '닉네임 1',
					receiverProfileImage: '/assets/images/userDefault.svg',
					price: 90000,
					status: 'ACTIVE ',
					lastUpdatedAt: '2024-01-10T14:00:00',
				},
				{
					chatRoomId: 2,
					receiverNickname: '닉네임2',
					receiverProfileImage: '/assets/images/userDefault.svg',
					price: 90000,
					status: 'INACTIVE ',
					lastUpdatedAt: '2024-01-10T14:00:00',
				},
				{
					chatRoomId: 3,
					receiverNickname: '닉네임3',
					receiverProfileImage: '/assets/images/userDefault.svg',
					price: 90000,
					status: 'YELLOW_DOT ',
					lastUpdatedAt: '2024-01-10T14:00:00',
				},
				{
					chatRoomId: 4,
					receiverNickname: '닉네임4',
					receiverProfileImage: '/assets/images/userDefault.svg',
					price: 90000,
					status: 'ACTIVE ',
					lastUpdatedAt: '2024-01-10T14:00:00',
				},
			],
		},
		{
			productId: 2,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명2',
			reservationType: 'STAY',
			roomName: '객실명22',
			standardNumber: 2,
			maximumNumber: 4,
			checkInTime: '14:00:00',
			checkOutTime: '12:00:00',
			checkInDate: '2024-01-10',
			checkOutDate: '2024-01-15',
			originPrice: 120000,
			yanoljaPrice: 110000,
			goldenPrice: 100000,
			status: 'TRANSFER_PENDING',
			chats: [
				{
					chatRoomId: 1,
					receiverNickname: '닉네임1',
					receiverProfileImage: '/assets/images/userDefault.svg',
					price: 90000,
					status: 'NEGOTIATING',
					lastUpdatedAt: '2024-01-10T14:00:00',
				},
			],
		},
	],
};

// 판매완료-리스트 API

export type ApiSold = {
	status: string;
	message: string;
	data: SoldItem[];
};

export type SoldItem = {
	productId: number;
	accommodationImage: string;
	accommodationName: string;
	roomName: string;
	standardNumber: number;
	maximumNumber: number;
	goldenPrice: number;
	productStatus: string;
	lastUpdatedAt: string;
};

export const SoldRes: ApiSold = {
	status: 'SUCCESS',
	message: '상품이 성공적으로 조회가 완료되었습니다.',
	data: [
		{
			productId: 1,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명',
			roomName: '객실명',
			standardNumber: 2,
			maximumNumber: 4,
			goldenPrice: 100000,
			productStatus: 'SOLD_OUT',
			lastUpdatedAt: '2024-01-10T14:00:00',
		},
		{
			productId: 2,
			accommodationImage: '/assets/images/reserveRoom.svg',
			accommodationName: '숙소명',
			roomName: '객실명',
			standardNumber: 2,
			maximumNumber: 4,
			goldenPrice: 100000,
			productStatus: 'EXPIRED',
			lastUpdatedAt: '2024-01-10T14:00:00',
		},
	],
};

// 판매완료- 상세 API
export interface ApiSoldDetail {
	status: string;
	message: string;
	data: SoldDetailData;
}

export interface SoldDetailData {
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
	goldenPrice: number;
	completedDate: string;
	calculatedDate: string;
	calculatedPrice: number;
	fee: number;
	chatRoomId: number;
	receiverNickname: string;
	receiverProfileImage: string;
	lastUpdatedAt: string;
}

export const SoldDetailRes: ApiSoldDetail = {
	status: 'SUCCESS',
	message: '상품이 성공적으로 조회가 완료되었습니다.',
	data: {
		productId: 1,
		accommodationImage: '/assets/images/reserveRoom.svg',
		accommodationName: '숙소명',
		roomName: '객실명',
		standardNumber: 2,
		maximumNumber: 4,
		reservationType: 'STAY',
		checkInTime: '14:00:00',
		checkOutTime: '12:00:00',
		checkInDate: '2024-01-10',
		checkOutDate: '2024-01-15',
		goldenPrice: 100000,
		receiverNickname: '구매자 닉네임',
		completedDate: '2024-01-01T01:01:01',
		calculatedDate: '2024-01-01T01:01:01',
		calculatedPrice: 90000,
		fee: 900,
		chatRoomId: 123,
		receiverProfileImage: '/assets/images/userDefault.svg',
		lastUpdatedAt: '2024-01-18T23:00:00',
	},
};

// 판매만료 - 상세 API
export interface ApiExpiredDetail {
	status: string;
	message: string;
	data: ExpiredDetailData;
}

export interface ExpiredDetailData {
	productId: number;
	accommodationImage: string;
	accommodationName: string;
	roomName: string;
	standardNumber: number;
	maximumNumber: number;
	checkInTime: string;
	checkOutTime: string;
	checkInDate: string;
	checkOutDate: string;
	price: number;
}

export const ExpiredDetailRes = {
	status: 'SUCCESS',
	message: '상품이 성공적으로 조회가 완료되었습니다.',
	data: {
		productId: 1,
		accommodationImage: '/assets/images/reserveRoom.svg',
		accommodationName: '숙소명',
		roomName: '객실명',
		standardNumber: 2,
		maximumNumber: 4,
		checkInTime: '14:00:00',
		checkOutTime: '12:00:00',
		checkInDate: '2024-01-10',
		checkOutDate: '2024-01-15',
		price: 100000,
	},
};
