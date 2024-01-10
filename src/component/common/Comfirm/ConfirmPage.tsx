import React from 'react';
import { Link } from 'react-router-dom';
/**
 * @description 비밀번호 변경 완료 , 회원탈퇴 완료 페이지 공통 컴포넌트입니다.
 * @param {title} Header 부분에 들어갈 제목입니다. string ex) 회원탈퇴
 * @param {content} 중앙 부분에 들어갈 내용입니다. string
 * @param {btnContent} 버튼 안에 들어갈 내용입니다. ex) 홈으로 , 확인 ..
 * @param {link} 이 버튼을 클릭하면 어디로 갈 것인 지 url을 적을 수 있습니다. ex) '/mypage'
 */
interface ComfirmProps {
	title: string;
	content: string;
	btnContent: string;
	link: string;
}
const ConfirmPage = ({ title, content, btnContent, link }: ComfirmProps) => {
	return (
		<div className="h-screen flex flex-col items-center">
			<div className="w-[375px] h-[70px] text-center pt-5 font-medium">
				{title}
			</div>
			<div className="flex flex-col items-center justify-center h-[80vh]">
				<span>{content}</span>
			</div>
			<Link
				className="flex items-center w-[90%] h-11 rounded-xl text-center text-m bg-main text-white cursor-pointer"
				to={link}
			>
				<button type="button" className="mx-auto">
					<span className="text-center">{btnContent}</span>
				</button>
			</Link>
		</div>
	);
};

export default ConfirmPage;
