import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './component/common/Layout';
import { Main } from './pages/main';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import ProfileEdit from './pages/mypage/component/ProfileEdit';
import { Alarm } from './pages/alarm';
import { LocalSearch } from './pages/localSearch';
import AddMyAccount from './pages/mypage/component/AddMyAccount';
import ConfirmWithdrawl from './pages/mypage/component/ConfirmWithdrawl';
import EditPassword from './pages/mypage/component/EditPassword';
import ManageAccount from './pages/mypage/component/ManageAccount';
import MyAccount from './pages/mypage/component/MyAccount';
import Withdrawl from './pages/mypage/component/Withdrawal';
import MyPage from './pages/mypage/MyPage.page';
import InterestRegion from './pages/mypage/component/InterestRegion';

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Main />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/alarm" element={<Alarm />} />
					<Route path="/location" element={<LocalSearch />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/editprofile" element={<ProfileEdit />} />
					<Route path="/mylocations" element={<InterestRegion />} />
					<Route path="/myaccount" element={<MyAccount />} />
					<Route path="/my/account/registration" element={<AddMyAccount />} />
					<Route path="/member" element={<ManageAccount />} />
					<Route path="/member/editpassword" element={<EditPassword />} />
					<Route path="/member/withdrawl" element={<Withdrawl />} />
					<Route
						path="/member/withdrawl/confirm"
						element={<ConfirmWithdrawl />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
