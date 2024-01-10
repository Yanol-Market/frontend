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
		<div className=" bg-white left-0 top-0 w-[375px] h-[70px] z-20 m-auto relative">
			<div className=" w-[375px] h-[70px]  flex pt-[25px]">
				<div className="my-auto cursor-pointer pl-5 ">
					<ArrowBackIosNewOutlinedIcon
						sx={{ width: '14px' }}
						onClick={handleArrowBackClick}
					/>
				</div>
				<div className="font-[500] text-font font-pre m-auto relative left-[-18px]">
					{title}
				</div>
			</div>
		</div>
	);
};

export default Header;
