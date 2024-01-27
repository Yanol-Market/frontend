import React from 'react';

const SoldSkeleton = () => {
	return (
		<div
			role="status"
			className="p-5 animate-pulse w-full h-full flex justify-center items-center"
		>
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
			{/* 체크인 */}
			<div className="h-16 bg-skel rounded-lg dark:bg-skel  mb-8"></div>
			{/* 거래정보 */}
			<div className="h-5 bg-skel rounded-full dark:bg-skel w-24 mb-6"></div>
			<div className="flex justify-between pb-4">
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-32"></div>
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-28"></div>
			</div>
			<div className="flex justify-between pb-4">
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-28"></div>
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-32"></div>
			</div>
			<div className="flex justify-between pb-4">
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-40"></div>
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-20"></div>
			</div>
			<div className="flex justify-between pb-4">
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-24"></div>
				<div className="h-4 bg-skel rounded-full dark:bg-skel w-28"></div>
			</div>
			{/* 나의 거래  */}
			<div className="h-5 bg-skel rounded-full dark:bg-skel w-24 mb-6 mt-3"></div>
			<div className="h-14 bg-skel rounded-lg dark:bg-skel  mt-8"></div>
		</div>
	);
};

export default SoldSkeleton;
