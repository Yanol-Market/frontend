import React from 'react';
/**
 * @description 이 컴포넌트는 바텀 시트 내부 내용에서 버튼이 두 개 일 때 공통으로 적용할 수 있는 컴포넌트입니다. 왼쪽 버튼은 회색 오른쪽 버튼은 main 색으로 되어 있습니다.
 * @param {title} ex) 로그아웃 하시겠습니까? 같은 string 입니다.
 * @param {leftBtn} ex) 아니요 같은 string입니다. bg-borderGray 색입니다.
 * @param {rightBtn} ex) 네 같은 string 입니다. bg-main 색입니다.
 * @param {leftBtnFunc} ex) 왼쪽 버튼을 클릭했을 시 동작하는 함수입니다.
 * @param {rightBtnFunc} ex) 오른쪽 버튼을 클릭했을 시 동작하는 함수입니다.
 */
interface ContentTwoBtnProps {
	title: string;
	leftBtn: string;
	rightBtn: string;
	leftBtnFunc: () => void;
	rightBtnFunc: () => void;
}
const ContentTwoBtnPage = ({
	title,
	leftBtn,
	rightBtn,
	leftBtnFunc,
	rightBtnFunc,
}: ContentTwoBtnProps) => {
	return (
		<div className="items-center mt-16 text-center">
			<p className="text-body text-center">{title}</p>
			<div className="flex flex-row gap-2 mt-11 justify-center">
				<button
					className="bg-borderGray w-40 h-11 rounded-xl text-white"
					onClick={leftBtnFunc}
				>
					{leftBtn}
				</button>
				<button
					className="bg-main w-40 h-11 rounded-xl text-white"
					onClick={rightBtnFunc}
				>
					{rightBtn}
				</button>
			</div>
		</div>
	);
};

export default ContentTwoBtnPage;
