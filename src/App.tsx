import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './component/common/Layout';
import { Main } from './pages/main';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import ProfileEdit from './pages/mypage/component/ProfileEdit';
import BeforeSignInMyPage from './pages/mypage/component/BeforeSignInMyPage';
import AfterSignInMyPage from './pages/mypage/component/AfterSignInMyPage';
<<<<<<< HEAD
import InterestRegion from './pages/mypage/component/InterestRegion';
import { LocalSearch } from './pages/localSearch';
import MyAccount from './pages/mypage/component/MyAccount';
import AddMyAccount from './pages/mypage/component/AddMyAccount';
import ManageAccount from './pages/mypage/component/ManageAccount';
import EditPassword from './pages/mypage/component/EditPassword';
import ConfirmPassword from './pages/mypage/component/ConfirmPassword';
import Withdrawl from './pages/mypage/component/Withdrawal';
import ConfirmWithdrawl from './pages/mypage/component/ConfirmWithdrawl';
=======
import { Alarm } from './pages/alarm';

import { LocalSearch } from './pages/localSearch';
>>>>>>> 8e969e7d80077cd6525925d15c47032416a90198

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Main />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/beforesignin" element={<BeforeSignInMyPage />} />
					<Route path="/aftersignin" element={<AfterSignInMyPage />} />
<<<<<<< HEAD
					<Route path="/profiledit" element={<ProfileEdit />} />
					<Route path="/interestregion" element={<InterestRegion />} />
=======
					<Route path="/alarm" element={<Alarm />} />
>>>>>>> 8e969e7d80077cd6525925d15c47032416a90198
					<Route path="/location" element={<LocalSearch />} />
					<Route path="/mypage" element={<MyAccount />} />
					<Route path="/addaccount" element={<AddMyAccount />} />
					<Route path="/manageaccount" element={<ManageAccount />} />
					<Route path="/editpassword" element={<EditPassword />} />
					<Route path="/confirmpassword" element={<ConfirmPassword />} />
					<Route path="/withdrawl" element={<Withdrawl />} />
					<Route path="/confirmwithdrawl" element={<ConfirmWithdrawl />} />
					{/* 임시 */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
