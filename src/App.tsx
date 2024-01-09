import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './component/common/Layout';
import { Main } from './pages/main';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import ProfileEdit from './pages/mypage/component/Edit/ProfileEdit';
import { Alarm } from './pages/alarm';
import { LocalSearch } from './pages/localSearch';
import AddMyAccount from './pages/mypage/component/Account/AddMyAccount';
import EditPassword from './pages/mypage/component/Edit/EditPassword';
import ManageAccount from './pages/mypage/component/Account/ManageAccount';
import MyAccount from './pages/mypage/component/Account/MyAccount';
import Withdrawl from './pages/mypage/component/WithDrawl/Withdrawal';
import MyPage from './pages/mypage/MyPage.page';
import InterestRegion from './pages/mypage/component/Region/InterestRegion';
import ConfirmPage from './pages/mypage/component/Comfirm/ConfirmPage';

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
					<Route path="/mypage/editprofile" element={<ProfileEdit />} />
					<Route path="/mypage/mylocations" element={<InterestRegion />} />
					<Route path="/myaccount" element={<MyAccount />} />
					<Route path="/myaccount/registration" element={<AddMyAccount />} />
					<Route path="/member" element={<ManageAccount />} />
					<Route path="/member/editpassword" element={<EditPassword />} />
					<Route
						path="/member/editpassword/confirm"
						element={
							<ConfirmPage
								title="비밀번호 변경"
								content="비밀번호가 변경되었습니다."
								btnContent="확인"
								link="/member"
							/>
						}
					/>
					<Route path="/member/withdrawl" element={<Withdrawl />} />
					<Route
						path="/member/withdrawl/confirm"
						element={
							<ConfirmPage
								title="회원탈퇴"
								content="회원탈퇴가 완료되었습니다."
								btnContent="홈으로"
								link="/"
							/>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
