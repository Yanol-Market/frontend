import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './component/common/Layout';
import { Main } from './pages/main';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import ReservationPage from './pages/reservation';
import Complete from './pages/reservation/Complete';
import Timeout from './pages/reservation/Timeout';
import Failure from './pages/reservation/Failure';
import { AddProduct } from './pages/addProduct';
import { AddProductYaSignIn } from './pages/addProductYaSignIn';
import PurchaseHistory from './pages/mypage/component/purchaseHistory/PurchaseHistory';
import SalesHistory from './pages/mypage/component/salesHistory/SalesHistory';
import { Alarm } from './pages/alarm';
import { SearchResult } from './pages/searchResult';
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
import PurchaseDetail from './pages/mypage/component/purchaseHistory/PurchaseDetail';
import { EditProd } from './pages/editProd';
import CompletionEdit from './pages/editProd/component/CompletionEdit';
import { ChatList } from './pages/chatList';
import { Products } from './pages/products';
import { YaSignIn } from './pages/yaSignIn';
import NotFoundContent from './pages/mypage/component/content/NotFoundContent';
import { ChatPage } from './pages/chat';
import ExpiredProdDetail from './pages/mypage/component/salesHistory/ExpiredProdDetail';
import { NotFoundPage } from './component/common/NotFound';
import { Splash } from './pages/splash';

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/splash" element={<Splash />} />
					<Route path="/" element={<Main />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/yasignin" element={<YaSignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/alarm" element={<Alarm />} />
					<Route path="/location" element={<LocalSearch />} />
					<Route path="/search" element={<Search />} />
					<Route path="/sales" element={<SalesHistory />}>
						<Route path="detail/:productId" element={<SoldDetail />} />
						<Route
							path="expired/detail/:productId"
							element={<ExpiredProdDetail />}
						/>
					</Route>
					<Route path="/purchase" element={<PurchaseHistory />}>
						<Route path="detail/:productId" element={<PurchaseDetail />} />
					</Route>
					<Route path="/searchResult" element={<SearchResult />} />
					<Route path="/reservation" element={<ReservationPage />} />
					<Route
						path="/reservation/nego/:productId"
						element={<ReservationPage />}
					/>
					<Route path="/reservation/complete" element={<Complete />} />
					<Route path="/reservation/timeout" element={<Timeout />} />
					<Route path="/reservation/failure" element={<Failure />} />
					<Route path="/product/:productId" element={<Products />} />
					<Route path="/addproduct/*" element={<AddProduct />} />
					<Route path="/addproductyasignin" element={<AddProductYaSignIn />} />
					<Route path="/edit/:productId" element={<EditProd />} />
					<Route
						path="/edit/completion/:productId"
						element={<CompletionEdit />}
					/>
					<Route path="/chatList" element={<ChatList />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route
						path="/mypage/announcement"
						element={
							<NotFoundContent
								title="공지사항"
								content="공지사항이 없습니다."
							/>
						}
					/>
					<Route
						path="/mypage/guide"
						element={
							<NotFoundContent
								title="개인정보 처리방침"
								content="페이지 준비중입니다."
							/>
						}
					/>
					<Route path="/mypage/editprofile" element={<ProfileEdit />} />
					<Route path="/mypage/wishes" element={<WishList />} />
					<Route path="/mypage/mylocations" element={<InterestRegion />} />
					<Route path="/myaccount" element={<MyAccount />} />
					<Route path="/myaccount/registration" element={<AddMyAccount />} />
					<Route path="/member" element={<ManageAccount />} />
					<Route path="/member/editpassword" element={<EditPassword />} />
					<Route path="/chat" element={<ChatPage />} />
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
					<Route path="/*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
