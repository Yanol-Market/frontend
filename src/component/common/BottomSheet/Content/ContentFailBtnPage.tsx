import React from 'react';
/**
 * @description 이 컴포넌트는 바텀시트 올라올 때 한 가지 버튼으로 에러처리가 될 때 사용되는 컴포넌트입니다.
 * @param {title} ex) 계좌 번호가 맞지 않습니다. 같은 string이 들어갑니다.
 * @param {btn} ex) 네, 아니오 등으로 string이 들어갑니다.
 * @param {btnFunc} 이 버튼을 클릭 했을 때 동작되고 싶은 함수를 넣습니다.
 **/
interface ContentFailBtnProps {
	title: string;
	btn: string;
	btnFunc: () => void;
}
const ContentFailBtn = ({ title, btn, btnFunc }: ContentFailBtnProps) => {
	return (
		<div className="items-center mt-11 text-center">
			<p className="text-body">{title}</p>

			<button
				className="bg-main w-full h-11 rounded-xl text-white mt-11 cursor-pointer"
				onClick={btnFunc}
			>
				{btn}
			</button>
		</div>
	);
};

export default ContentFailBtn;
