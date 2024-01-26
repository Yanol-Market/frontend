import React from 'react';

const ListSkeleton = () => {
	return (
		<div role="status" className="p-5 animate-pulse w-full h-full">
			<div className="h-2 bg-skel rounded-full dark:bg-skel w-40 mb-4"></div>
			<div className="flex justify-between pb-10">
				<div className="flex ">
					<div className="w-[80px] h-[80px]  bg-skel rounded-lg dark:bg-skel"></div>

					<div className="flex flex-col justify-between pl-3 ">
						<div className="">
							<div className="h-3 bg-skel rounded-full dark:bg-skel w-36 mb-2"></div>
							<div className="h-3 bg-skel rounded-full dark:bg-skel w-44"></div>
						</div>

						<div className="h-4 bg-skel rounded-full dark:bg-skel w-24"></div>
					</div>
				</div>
				<div className="flex justify-end items-end h-[80px]">
					<div className="h-5  bg-skel rounded-full dark:bg-skel w-8"></div>
				</div>
			</div>
			<div className="border-b border-borderGray  dark:bg-skel"></div>
		</div>
	);
};

export default ListSkeleton;
