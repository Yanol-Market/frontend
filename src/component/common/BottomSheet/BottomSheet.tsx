import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * @description 바텀시트 공통 컴포넌트입니다.
 * @param {isOpen} useState로 관리해주는 열고 닫는 boolean 값입니다.
 * @param {onClose} 닫는 함수입니다.
 * @param {viewHeight} 얼만큼 높이로 바텀시트를 보여줄 지 설정할 수 있습니다. string ex) calc(100vh * 0.2)
 * @param {children} 바텀 시트 안에 새로운 컴포넌트 혹은 내용을 넣어줄 수 있습니다.
 */

interface BottomSheetProps {
	isOpen: boolean;
	onClose: () => void;
	viewHeight?: number | string;
	autoHeight?: string;
	children?: React.ReactNode;
}

const BottomSheet = ({
	isOpen,
	onClose,
	viewHeight,
	children,
}: BottomSheetProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<div
						className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-50"
						onClick={onClose}
					></div>

					<motion.div
						initial={{ height: 0 }}
						animate={isOpen ? { height: viewHeight } : { height: 0 }}
						exit={{ height: 0 }}
						transition={{ type: 'anticipate', stiffness: 200, damping: 20 }}
						className=" bottom-0 left-0 right-0 bg-white p-4 w-full max-w-[430px] sm:w-[430px]  mx-auto rounded-t-3xl z-50 fixed"
					>
						<img
							src="/assets/images/closeModal.svg"
							alt="바텀 시트 내리기"
							onClick={onClose}
							className="cursor-pointer mt-4 bg-gray-200 hover:bg-gray-300  absolute top-2 right-[1.2rem]"
						/>

						{children}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default BottomSheet;
