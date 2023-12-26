import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className="bg-borderGray  min-h-screen ">
			<div className="bg-white min-h-screen max-w-[360px] relative px-5 m-auto top-0 left-0 overflow-x-clip sm:w-[360px]">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
