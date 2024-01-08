import React from 'react';

export const SearchFooter = () => {
	return (
		<div className="border-t-[7px] border-borderWhite">
			<div className='pt-[30px] pl-[20px]'>
				<p className="pb-[6px] text-m font-semibold text-fontBlack">최근 검색어</p>
				<div className="flex">
					<p className="px-[10px] py-[6px] text-m text-descGray bg-inputGray rounded-[20px] border-1 border-borderWhite">
						속초 / 24.01.03~24.01.10 / 10만원대
					</p>
				</div>
			</div>
		</div>
	);
};
