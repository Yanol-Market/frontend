import React from 'react';
import { Header } from '../../component/common/Header';
import { useQueryAlarm } from '../../hooks/useQuertAlarm';
import { AlertRes } from '../../type/alarm';
import { formatTimeAgo } from '../../utils/formate';

const Alarm = () => {
	const { data, error } = useQueryAlarm();
	if (error) {
		return <div> 에러에러 </div>;
	}
	return (
		<div>
			<Header title={'알람'} />
			{data?.alertResponses.length === 0 ? (
				<div className="test-lg text-descGray flex flex-col items-center justify-center h-screen">
					<div className="pb-28">수신된 알림이 없습니다. </div>
				</div>
			) : (
				<div>
					{data?.alertResponses.map((item: AlertRes) => (
						<div
							key={item.alertId}
							className={`h-[62px] flex justify-between items-center px-[20px] text-sm ${
								item.viewed
									? 'bg-white border-b border-borderGray '
									: ' bg-bgMain border-b border-homeMain'
							}`}
						>
							<div className="w-[275px]">{item.content}</div>
							<div className="pl-[35px]">{formatTimeAgo(item.createdAt)}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Alarm;
