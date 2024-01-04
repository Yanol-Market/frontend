import React, { useState } from 'react';
import { Header } from '../../../component/common/Header';
import Modal from 'react-modal-bottom-sheet';

interface ModalProps {
	setModal: () => void;
	height: string;
	element: Element;
}
const InterestRegion = () => {
	const [isModalActive, setIsModalActive] = useState(false);

	const handleModal = () => {
		setIsModalActive?.(!isModalActive);
	};
	return (
		<div className="flex flex-col justify-center">
			<Header title={'관심 지역'} />
			<div className="w-[90%] mx-auto mt-11 font-body font-medium">
				<p>관심 지역을 설정해 두시면 알림을 보내드려요!</p>
				<p>관심지역은 3개까지 추가 가능합니다.</p>
			</div>
			<div
				className="w-[90%] flex flex-row justify-between rounded-lg bg-lightGray mx-auto mt-5 p-3 text-gray"
				onClick={handleModal}
			>
				<p>관심지역을 선택해주세요.</p>
				<img src="/assets/images/bottomArrow.svg" alt="아래로 이동" />
			</div>
			{isModalActive && (
				<Modal
					setModal={handleModal}
					height="300"
					element={<div>bottomsheet contents </div>}
				/>
			)}
		</div>
	);
};

export default InterestRegion;
