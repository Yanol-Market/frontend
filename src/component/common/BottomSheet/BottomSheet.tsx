import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface bottomSheetProps {
	isOpen: boolean;
	onClose: () => void;
	viewHeight: string;
	children?: React.ReactNode;
}

const BottomSheet = ({
	isOpen,
	onClose,
	viewHeight,
	children,
}: bottomSheetProps) => {
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
						className="absolute bottom-0 left-0 right-0 bg-white p-4 max-w-[375px] mx-auto rounded-t-3xl z-50 overflow-hidden"
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
