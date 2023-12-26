import React from 'react';
import tw from 'twin.macro';

export default function Main() {
	return (
		<>
			<div className="text-main text-headline1 font-bold py-10">메인</div>
			<TestDiv>Golden-ticket</TestDiv>
		</>
	);
}

const TestDiv = tw.div`
bg-bgMain
p-10 
text-body
`;
