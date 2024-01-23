import React, { useEffect, useState } from 'react';
import ReservationItem, { Reservation } from './ReservationItem';
import { getReservations } from '../../../../apis/reservations';

interface Props {
	onNextStep: (data: {
		originPrice: number;
		yanoljaPrice: number;
		reservationId: number;
		goldenPrice: number; // 추가
		content: string; // 추가
	}) => void;
}

const AddProductSelectionStep = ({ onNextStep }: Props) => {
	const [isLoggedIn] = useState(true);
	const hasReservations = true; // 예약 내역 여부
	const [reservations, setReservations] = useState<Reservation[]>([]); // 예약 상태를 저장합니다.

	const [selectedReservationIndex, setSelectedReservationIndex] = useState<
		number | null
	>(null);

	useEffect(() => {
		const fetchReservations = async () => {
			try {
				const data = await getReservations('9');
				setReservations(data.data);
			} catch (error) {
				console.error('예약을 불러오는 중 오류 발생:', error);
				// 오류 처리를 추가하세요.
			}
		};

		// 컴포넌트가 마운트될 때 예약을 가져옵니다.
		fetchReservations();
	}, []);

	const handleReservationItemClick = (index: number) => {
		setSelectedReservationIndex(index);
		console.log('Selected Reservation Index:', index);
	};

	const handleNextStep = () => {
		const sortedReservations = [...reservations].sort((a, b) => {
			return a.checkInDate.localeCompare(b.checkInDate);
		});
		if (selectedReservationIndex === null) {
			alert('상품을 선택해주세요!');
		} else {
			const selectedReservation = sortedReservations[selectedReservationIndex];
			const { originPrice, yanoljaPrice, reservationId } = selectedReservation;

			// 선택된 상품의 정보 출력
			console.log('Selected Product Info:', {
				originPrice,
				yanoljaPrice,
				reservationId,
			});

			onNextStep({
				originPrice,
				yanoljaPrice,
				reservationId,
				goldenPrice: 0,
				content: '',
			});
		}
	};

	const renderContent = () => {
		// 기존 reservations 배열을 복사한 후 예약일 기준으로 정렬
		const sortedReservations = [...reservations].sort((a, b) => {
			// 날짜 형식이 'YYYY.MM.DD' 이므로 간단한 문자열 비교로 정렬 가능
			return a.checkInDate.localeCompare(b.checkInDate);
		});

		if (isLoggedIn) {
			return (
				<>
					{/* 회색 선 */}
					<div className="fixed top-[9rem] w-[430px] h-[0.4375rem] bg-lightGray" />

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
							<div className="fixed bottom-0 w-[430px] bg-white h-[5.5rem]" />
							{/* 다음 버튼 */}
							<div className="fixed bottom-7 left-0 right-0 bg-gray-200 flex justify-center">
								<button
									type="button"
									className={`mx-auto w-[50%] h-[3.125rem] rounded-xl text-lg ${
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
			<div className="fixed top-[6rem] w-[430px] bg-white h-[7rem]" />
			<h2 className="text-body ml-5 mb-4 fixed top-[6.5rem]">판매 상품 선택</h2>
			{renderContent()}
		</div>
	);
};

export default AddProductSelectionStep;
