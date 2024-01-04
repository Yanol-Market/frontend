import React from 'react';
import NewMessage from './component/NewMessage';
import Message from './component/Message';
import { Header } from '../../component/common/Header';

const Alarm = () => {
	return (
		<div>
			<Header title={'알람'} />
			<NewMessage />
			<NewMessage />
			<NewMessage />
			<Message />
			<Message />
			<Message />
		</div>
	);
};

export default Alarm;
