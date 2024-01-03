import React from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

interface propsType {
	title: string | null;
}

const Header = ({ title }: propsType) => {
	const handleArrowBackClick = () => {
		window.history.back();
	};

	return (
		<div className=" bg-white fixed left-0 top-0 w-[375px] h-[70px] z-20 m-auto relative">
			<div className=" w-[375px] px-5  h-[70px]  flex  pt-[30px] ">
				<div>
					<ArrowBackIosNewOutlinedIcon
						sx={{ width: '14px' }}
						onClick={handleArrowBackClick}
					/>
				</div>
				<div className=" pl-[20px] font-semibold text-font">{title}</div>
			</div>
		</div>
	);
};

export default Header;
