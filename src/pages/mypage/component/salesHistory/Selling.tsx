import React, { useState } from 'react';
import StatusBar from './StatusBar';
import Buyer from './Buyer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardProd from './CardProd';
import BottomSheet from '../../../../component/common/BottomSheet/BottomSheet';
import SellingBottom from './SellingBottom';

const data = {
	productId: 548789754,
	goldenPrice: 200000,
	yanoljaPrice: 100000,
	originPrice: 200000,
};
// 판매중
const Selling = () => {
	const [Bottom, setBottom] = useState(false);

	const openBottom = () => {
		setBottom(true);
		console.log('오픈');
	};

	const closeBottom = () => {
		setBottom(false);
	};

	return (
		<div className="p-5">
			<BottomSheet isOpen={Bottom} onClose={closeBottom} viewHeight="160px">
				<SellingBottom
					setBottom={setBottom}
					productId={data.productId}
					yanoljaPrice={data.yanoljaPrice}
					originPrice={data.originPrice}
				/>
			</BottomSheet>

			<div className="pb-4 flex justify-between items-center">
				<p className="text-sm">골든티켓 등록번호 45123548546544</p>
				<div>
					<MoreVertIcon
						sx={{ width: '13px', color: '#BDBDBD' }}
						className="cursor-pointer"
						onClick={openBottom}
					/>
				</div>
			</div>
			{/* <CardProd /> */}
			{/* <StatusBar /> */}
			{/* <Buyer /> */}
		</div>
	);
};

export default Selling;
