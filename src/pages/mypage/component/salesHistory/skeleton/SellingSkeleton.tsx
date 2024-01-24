import React from 'react';

const SellingSkeleton = () => {
	return (
		<div role="status" className="p-5 animate-pulse w-full h-full">
			<div className="h-2 bg-skel rounded-full dark:bg-skel w-40 mb-4"></div>
			<div className="flex justify-between pb-10">
				<div className="flex ">
					<div className="w-[80px] h-[80px]  bg-skel rounded-lg dark:bg-skel"></div>

					<div className="flex flex-col justify-between pl-3">
						<div className="">
							<div className="h-3 bg-skel rounded-full dark:bg-skel w-36 mb-2"></div>
							<div className="h-3 bg-skel rounded-full dark:bg-skel w-44"></div>
						</div>
						<div className="h-4 bg-skel rounded-full dark:bg-skel w-24"> </div>
					</div>
				</div>
				<div className="h-5 bg-skel rounded-full dark:bg-skel w-8"></div>
			</div>
			<div className="h-16 bg-skel rounded-lg dark:bg-skel  mb-8"></div>
			<div className="flex justify-between items-center mb-8">
				<div className="h-7  bg-skel rounded-full dark:bg-skel w-16"></div>
				<div className="flex-1 h-[2px]  bg-skel rounded-full dark:bg-skel "></div>
				<div className="h-7 bg-skel rounded-full dark:bg-skel w-16"></div>
				<div className="flex-1 h-[2px]  bg-skel rounded-full dark:bg-skel "></div>
				<div className="h-7 bg-skel rounded-full dark:bg-skel w-16"></div>
				<div className="flex-1 h-[2px]  bg-skel rounded-full dark:bg-skel "></div>
				<div className="h-7 bg-skel rounded-full dark:bg-skel w-16"></div>
			</div>
			<div className="h-5 bg-skel rounded-full dark:bg-skel w-28 mb-6"></div>
			<div className="h-14 bg-skel rounded-lg dark:bg-skel  mb-8"></div>

			{/* <div className="h-2 bg-skel rounded-full dark:bg-skel max-w-[300px] mb-2.5"></div>
			<div className="h-2 bg-skel rounded-full dark:bg-skel max-w-[360px]"></div> */}
		</div>
	);
};

export default SellingSkeleton;
