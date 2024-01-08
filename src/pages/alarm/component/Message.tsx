import React from 'react';
import tw from 'twin.macro';

const message = () => {
	return (
		<Wrapper>
			<div className="w-[275px]">
				판매중인 상품 인터컨티넨털 서울 상품에 대한 네고 요청이 도착했습니다 .
			</div>
			<div className="pl-[35px]">5분</div>
		</Wrapper>
	);
};

export default message;

const Wrapper = tw.div`
h-[85px]
flex
justify-between
items-center 
px-[20px]
text-sm
`;
