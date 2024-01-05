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
import InterestRegion from './pages/mypage/component/InterestRegion';
import { LocalSearch } from './pages/localSearch';
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
					<Route path="/profiledit" element={<ProfileEdit />} />
					<Route path="/interestregion" element={<InterestRegion />} />
					<Route path="/location" element={<LocalSearch />} />
					{/* 임시 */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
