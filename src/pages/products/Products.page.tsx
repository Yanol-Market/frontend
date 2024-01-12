import React from 'react';
import Header from '../../component/common/Header/Header';
import { DetailContent } from './component/DetailContent';

export const Products = () => {
	return (
		<div className='overflow-scroll h-[100vh]'>
			<Header title={''} />
            <DetailContent />
		</div>
	);
};
