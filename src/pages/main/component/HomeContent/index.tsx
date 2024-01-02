import React from 'react';
import { HomeContentTitle } from './HomeContentTitle';
import { ProductItemSpecial } from '../Product/ProductItemSpecial';

export const HomeContent = () => {
	return (
		<div className="bg-homeMain">
			<div className=" bg-white pt-7 px-5 border-solid border-1 border-white-1 rounded-t-2xl">
				<div className="">
					<HomeContentTitle
						title="초특가보다 파격적인 골든 특가"
						img="assets/images/star.svg"
						desc="골든특가에서만 만날수 있는 가격"
						src="to"
					/>
                    <ProductItemSpecial />
				</div>
			</div>
		</div>
	);
};
