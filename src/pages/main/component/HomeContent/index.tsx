import React from 'react';
import { HomeContentTitle } from './HomeContentTitle';
import { ProductListSpecial } from '../Product/ProductListSpecial';
import { ProductListPopular } from '../Product/ProductListPopular';

export const HomeContent = () => {
	return (
		<div className="bg-homeMain overflow-y-auto max-h-[75vh]">
			<div className=" bg-white h-full pt-7 px-5 border-solid border-1 border-white-1 rounded-t-2xl pb-20">
				<div className="">
					<HomeContentTitle
						title="초특가보다 파격적인 골든 특가"
						img="assets/images/star.svg"
						desc="골든특가에서만 만날수 있는 가격"
					/>
					<ProductListSpecial />
					<div className="mt-[46px]">
						<div className="mb-5">
							<HomeContentTitle
								title="핫클릭 가장 많이 눌러본 상품"
								img="assets/images/fire.svg"
								desc="누구나 탐내고 있는 핫한 상품!"
							/>
						</div>
						<ProductListPopular />
					</div>
					<HomeContentTitle
						title="갓 올라와 따끈따끈 합니다"
						img="assets/images/light.svg"
						desc="방금 막 등록된 신품!"
					/>
					<ProductListSpecial />
				</div>
			</div>
		</div>
	);
};
