import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface bottomSheetProps {
	isOpen: boolean;
	onClose: () => void;
}

const BottomSheet = ({ isOpen, onClose }: bottomSheetProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ height: 0 }}
					animate={isOpen ? { height: `calc(100vh * 0.7)` } : { height: 0 }}
					exit={{ height: 0 }}
					transition={{ type: 'spring', stiffness: 200, damping: 20 }}
					className="border fixed absolute bottom-0 left-0 right-0 bg-white p-4 max-w-[375px] mx-auto rounded-t-3xl"
				>
					{/* Bottom Sheet 내용 */}
					{/* <BottomSheetHeader /> */}

					{/* 닫기 버튼 */}
					<button
						onClick={onClose}
						className="mt-4 bg-gray-200 hover:bg-gray-300 border absolute right-[1.2rem]"
					>
						닫기
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default BottomSheet;
