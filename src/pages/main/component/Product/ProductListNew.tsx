import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { ProductItemSpecial } from './ProductItemSpecial';
import { ProductItemNew } from './ProductItemNew';

export type ProductSpecialType = {
    productId : number,
    name  : string,
    option : string,
    checkIn : string,
    checkOut  : string,
    dDay : number,
    marketPrice  : number,
    marketPriceRatio : number,
    purchasePrice  : number,
    purchasePriceRatio  : number,
    price : number,
}

export const ProductListNew = () => {
	const [products, setProducts] = useState<ProductSpecialType[]>();
	const fetchData = async () => {
		const res = await getProducts();
        setProducts(res);
	};
	useEffect(() => {
		fetchData();
	}, []);
    if (!products){
        return <div>Loading...</div>
    }
	return <div className='flex flex-col gap-4'>{products.map((item)=> <ProductItemNew key={item.productId} product={item} />)}</div>;
};
