import React from 'react';

export const PlusButton = ({action}:{action:any}) => {
	return (
		<button onClick={action} className="text-gray px-[12px] py-[5px] border-[1px] rounded-[20px] border-solid border-gray bg-white flex justify-center">
			<p className="text-sm font-pre mr-[4px]">더보기</p>
			<div className='flex item-center h-[15px]'>
				<img
					className="w-[8px]"
					src="assets/images/bottomArrow.svg"
					alt="arrow"
				/>
			</div>
		</button>
	);
};
