import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../../apis/cookie';
import { getChatList } from '../../apis/chatList';
import FilterDropdown from './component/FilterDropdown';
import ChatListProd, { Chat } from './component/ChatListProd';

const ChatList = () => {
	const navigate = useNavigate();
	const { userType: initialUserType = 'all' } = useParams<{
		userType?: string;
	}>();
	const [userType, setUserType] = useState<string>(initialUserType);
	const [chatList, setChatList] = useState<Chat[]>([]);

	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (!accessToken) {
			navigate('/signin');
			return;
		}

		fetchChatList(userType);
	}, [navigate, userType]);

	const fetchChatList = async (type: string) => {
		try {
			const response = await getChatList(type);
			console.log('Response:', response);

			if (response.status === 'SUCCESS') {
				setChatList(response.data.chatRoomShortList);
			} else {
				console.error(response.message);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleDropdownChange = (selectedType: string) => {
		setUserType(selectedType);
		fetchChatList(selectedType);
	};

	const filterOptions = [
		{ value: 'all', label: '전체 거래' },
		{ value: 'seller', label: '판매 거래' },
		{ value: 'buyer', label: '구매 거래' },
	];

	return (
		<div className="p-4">
			<div className=" bg-white left-0 top-0 w-[430px] h-[70px] z-20 m-auto relative">
				<div className="flex pt-[25px]">
					<div className="font-[500] m-auto relative left-[-18px]">
						나의 거래
					</div>
				</div>
			</div>
			<FilterDropdown
				filterOptions={filterOptions}
				selectedFilter={userType}
				onFilterChange={handleDropdownChange}
			/>
			<ChatListProd chatRoomShortList={chatList} />
		</div>
	);
};

export default ChatList;
