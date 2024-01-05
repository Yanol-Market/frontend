import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useNavigate } from 'react-router-dom';

interface propsType {
	title: string | null;
	handleArrowBackClick?: () => void; // handleArrowBackClick을 부모 컴포넌트에서 직접 제어
}

const Header = ({ title, handleArrowBackClick }: propsType) => {
	const navigate = useNavigate();

	// const handleArrowBackClick = () => {
	// 	window.history.back();
	// };

	const defaultHandleArrowBackClick = () => {
		navigate(-1); // React Router의 뒤로 가기
	};
	// 부모 컴포넌트에서 handleArrowBackClick이 전달되지 않은 경우
	// 기본적으로 navigate(-1)을 수행하는 defaultHandleArrowBackClick 함수를 정의

	const handleClick = handleArrowBackClick || defaultHandleArrowBackClick;

	return (
		<div className=" bg-white left-0 top-0 w-[375px] h-[70px] z-20 m-auto relative">
			<div className=" w-[375px] h-[70px]  flex">
				<div className='my-auto cursor-pointer pl-5'>
					<ArrowBackIosNewOutlinedIcon
						sx={{ width: '14px', cursor: 'pointer' }}
						onClick={handleClick}
					/>
				</div>
				<div className="font-[500] text-font font-pre m-auto relative left-[-18px]">{title}</div>
			</div>
		</div>
	);
};

export default Header;
