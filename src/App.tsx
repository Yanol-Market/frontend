import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './component/common/Layout';
import { Main } from './pages/main';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import ReservationPage from './pages/reservation/ReservationPage';
import Complete from './pages/reservation/Complete';
import Timeout from './pages/reservation/Timeout';
import Failure from './pages/reservation/Failure';
import PurchaseHistory from './pages/mypage/component/purchaseHistory/PurchaseHistory';
import SalesHistory from './pages/mypage/component/salesHistory/SalesHistory';
import { Alarm } from './pages/alarm';
import { Search } from './pages/search';
import { LocalSearch } from './pages/localSearch';
import ConfirmPage from './component/common/Comfirm/ConfirmPage';
import MyPage from './pages/mypage/MyPage.page';
import AddMyAccount from './pages/mypage/component/account/AddMyAccount';
import ManageAccount from './pages/mypage/component/account/ManageAccount';
import MyAccount from './pages/mypage/component/account/MyAccount';
import EditPassword from './pages/mypage/component/edit/EditPassword';
import ProfileEdit from './pages/mypage/component/edit/ProfileEdit';
import InterestRegion from './pages/mypage/component/region/InterestRegion';
import WishList from './pages/mypage/component/wishes/WishList';
import Withdrawl from './pages/mypage/component/withDrawl/Withdrawal';
import SoldDetail from './pages/mypage/component/salesHistory/SoldDetail';
import Sold from './pages/mypage/component/salesHistory/Sold';
import PurchaseDetail from './pages/mypage/component/purchaseHistory/PurchaseDetail';

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
					<Route path="/search" element={<Search />} />
					<Route path="/sales" element={<SalesHistory />}>
						<Route path="detail/:productId" element={<SoldDetail />} />
					</Route>

					<Route path="/purchase" element={<PurchaseHistory />} />
					<Route path="/purchase/:productId" element={<PurchaseDetail />} />

					<Route path="/reservation" element={<ReservationPage />} />
					<Route path="/reservation/complete" element={<Complete />} />
					<Route path="/reservation/timeout" element={<Timeout />} />
					<Route path="/reservation/failure" element={<Failure />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/mypage/editprofile" element={<ProfileEdit />} />
					<Route path="/mypage/wishes" element={<WishList />} />
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
