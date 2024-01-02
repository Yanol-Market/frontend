import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../../apis/home';
import { ProductItemSpecial } from './ProductItemSpecial';

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

export const ProductListSpecial = () => {
	const [products, setProducts] = useState<ProductSpecialType[]>();
	const fetchData = async () => {
		const res = await getProducts();
        setProducts(res);
		console.log(res);
	};
	useEffect(() => {
		fetchData();
	}, []);
    if (!products){
        return <div>Loading...</div>
    }
	return <div>{products.map((item)=> <ProductItemSpecial key={item.productId} product={item} />)}</div>;
};
