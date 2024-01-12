import React from 'react';
import StatusBar from './StatusBar';
import Buyer from './Buyer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardProd from './CardProd';

const Selling = () => {
	// 판매중
	return (
		<div className="p-5">
			<div className="pb-4 flex justify-between items-center">
				<p className="text-sm">골든티켓 등록번호 45123548546544</p>
				<div>
					<MoreVertIcon
						sx={{ width: '13px', color: '#BDBDBD' }}
						className="cursor-pointer"
					/>
				</div>
			</div>
			<CardProd/>
			<StatusBar />
			<Buyer />
		</div>
	);
};

export default Selling;
