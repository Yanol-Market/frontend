import React from 'react';
import { HomeContentTitle } from './HomeContentTitle';
import { ProductListSpecial } from '../Product/ProductListSpecial';
import { ProductListPopular } from '../Product/ProductListPopular';
import { ProductListNew } from '../Product/ProductListNew';
import { ProductListRental } from '../Product/ProductListRental';

export const HomeContent = () => {
	return (
		<div className="bg-homeMain overflow-hidden">
			<div className=" bg-white pt-7 px-5 border-solid border-1 border-white-1 rounded-t-2xl pb-[15vh] h-[80vh] overflow-scroll">
				<div className="">
					<HomeContentTitle
						title="초특가보다 파격적인 골든 특가"
						img="assets/images/star.svg"
						desc="골든특가에서만 만날수 있는 가격"
					/>
					<ProductListSpecial />
					<div className="mt-[46px] mb-[42px] overflow-hidden">
						<div className="mb-5">
							<HomeContentTitle
								title="핫클릭 가장 많이 눌러본 상품"
								img="assets/images/fire.svg"
								desc="누구나 탐내고 있는 핫한 상품!"
							/>
						</div>
						<ProductListPopular />
					</div>
					<div className='mb-[30px]'>
						<div className="mb-4">
							<HomeContentTitle
								title="갓 올라와 따끈따끈 합니다"
								img="assets/images/light.svg"
								desc="방금 막 등록된 신품!"
							/>
						</div>
						<ProductListNew />
					</div>
					<div className="mb-4">
						<HomeContentTitle
							title="클릭 여기서 바로 빌려요!"
							img="assets/images/key.svg"
							desc="대실 상품을 살펴보세요"
						/>
					</div>
					<ProductListRental />
				</div>
			</div>
		</div>
	);
};
