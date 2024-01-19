import React, { useState } from 'react';
import ReservationItem, { Reservation } from './ReservationItem';

interface Props {
	onNextStep: () => void;
}

const AddProductSelectionStep = ({ onNextStep }: Props) => {
	const [isLoggedIn] = useState(true);
	const hasReservations = true; // 예약 내역 여부
	const [selectedReservationIndex, setSelectedReservationIndex] = useState<
		number | null
	>(null);

	const handleReservationItemClick = (index: number) => {
		setSelectedReservationIndex(index);
		console.log('Selected Reservation Index:', index);
	};

	const handleNextStep = () => {
		if (selectedReservationIndex === null) {
			alert('상품을 선택해주세요!');
		} else {
			onNextStep();
		}
	};

	const renderContent = () => {
		const reservations: Reservation[] = [
			// 야놀자 예약 정보 배열
			{
				reservationNumber: 2312120123456,
				reservationDate: '2024.01.01',
				hotelName: '에코그린 리조트 호텔',
				roomInfo: '디럭스 더블',
				numberOfPeople: 2,
				maxNumberOfPeople: 2,
				totalAmount: '300,000원',
				checkInDate: '2024.01.03',
				checkOutDate: '2024.01.03',
				checkInTime: '15:00',
				checkOutTime: '22:00',
				accommodationType: '대실',
				isRegistered: false,
			},
			{
				reservationNumber: 2312120123456,
				reservationDate: '2023.12.12',
				hotelName: '가평 푸른하늘 펜션',
				roomInfo: '디럭스 더블',
				numberOfPeople: 2,
				maxNumberOfPeople: 2,
				totalAmount: '2박 300,000원',
				checkInDate: '2024.01.03',
				checkOutDate: '2024.01.05',
				checkInTime: '15:00',
				checkOutTime: '15:00',
				accommodationType: '숙박',
				isRegistered: false,
			},
			{
				reservationNumber: 2312120123456,
				reservationDate: '2024.01.01',
				hotelName: '에코그린 리조트 호텔',
				roomInfo: '디럭스 더블',
				numberOfPeople: 2,
				maxNumberOfPeople: 2,
				totalAmount: '300,000원',
				checkInDate: '2024.01.10',
				checkOutDate: '2024.01.10',
				checkInTime: '15:00',
				checkOutTime: '22:00',
				accommodationType: '대실',
				isRegistered: true,
			},
			{
				reservationNumber: 2312120123456,
				reservationDate: '2023.12.12',
				hotelName: '가평 푸른하늘 펜션',
				roomInfo: '디럭스 더블',
				numberOfPeople: 2,
				maxNumberOfPeople: 2,
				totalAmount: '1박 100,000원',
				checkInDate: '2024.01.04',
				checkOutDate: '2024.01.05',
				checkInTime: '15:00',
				checkOutTime: '15:00',
				accommodationType: '숙박',
				isRegistered: false,
			},
		];

		// 기존 reservations 배열을 복사한 후 예약일 기준으로 정렬
		const sortedReservations = [...reservations].sort((a, b) => {
			// 날짜 형식이 'YYYY.MM.DD' 이므로 간단한 문자열 비교로 정렬 가능
			return a.checkInDate.localeCompare(b.checkInDate);
		});

		if (isLoggedIn) {
			return (
				<>
					{/* 회색 선 */}
					<div className="fixed top-[9rem] w-[375px] h-[0.4375rem] bg-lightGray" />

					<h3 className="fixed top-[11rem] text-body ml-5 font-semibold">
						나의 예약 내역
					</h3>
					{!hasReservations ? (
						<>
							<div className="flex flex-col items-center h-screen">
								<p className="mx-auto text-[14px] mt-[24.3125rem] text-descGray">
									양도 가능한 예약 내역이 없어요!
								</p>
							</div>
						</>
					) : (
						<div className="flex flex-col">
							<div className="mt-[12rem] mb-[6rem]">
								{sortedReservations.map((reservation, index) => (
									<ReservationItem
										key={index}
										reservation={reservation}
										isSelected={selectedReservationIndex === index}
										onClick={() => handleReservationItemClick(index)}
									/>
								))}
							</div>
							{/* 다음 버튼 밑으로 뒤에 컨텐츠 가림*/}
							<div className="fixed bottom-0 w-[375px] bg-white h-[5.5rem]" />
							{/* 다음 버튼 */}
							<div className="fixed bottom-7 left-0 right-0 bg-gray-200 flex justify-center">
								<button
									type="button"
									className={`mx-auto  w-[20.9375rem] h-[3.125rem] rounded-xl text-lg ${
										selectedReservationIndex === null
											? 'cursor-not-allowed bg-borderGray text-descGray'
											: 'cursor-pointer bg-main text-white'
									}`}
									onClick={handleNextStep}
								>
									다음
								</button>
							</div>
						</div>
					)}
				</>
			);
		} else {
			// 비로그인 상태일 때 야놀자 로그인 안내 표시
			return (
				<div className="flex flex-col items-center h-screen">
					<div className="flex items-center">
						<img
							className="mx-auto mt-[18.125rem] mb-[13.1875rem]"
							src="/assets/images/yanoljaLogo.svg"
							alt="yanolja Logo"
						/>
					</div>
					<div className="flex flex-col items-center flex-grow">
						<button
							type="button"
							className="mx-auto bg-yaLogo w-[20.9375rem] h-[3.125rem] rounded-xl text-white cursor-pointer text-m"
						>
							로그인
						</button>
						<p className="text-lg mb-6 mt-6">
							야놀자 계정으로 간편하게 판매해보세요!
						</p>
						<p className="text-sm max-w-[245px]">
							해당 서비스는 야놀자에서 예약된 건에 한해서 이용 가능합니다. 곧
							외부 숙소 예약까지 확장할 예정이오니 조금만 기다려주세요!
						</p>
					</div>
				</div>
			);
		}
	};

	return (
		<div>
			<div className="fixed top-[6rem] w-[375px] bg-white h-[7rem]" />
			<h2 className="text-body ml-5 mb-4 fixed top-[6.5rem]">판매 상품 선택</h2>
			{renderContent()}
		</div>
	);
};

export default AddProductSelectionStep;
