import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { getAddProductYaSignIn } from '../../apis/yaSignIn';
import { getProfiles } from '../../apis/getProfile';

const AddProductYaSignInPage: React.FC = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [loginError, setLoginError] = useState<string>(''); // 로그인 실패 시 메시지 상태
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			// getAddProductYaSignIn 함수 호출
			const response = await getAddProductYaSignIn(formData);

			// 로그인이 성공하면 내 정보를 다시 가져오기
			if (response.status === 'SUCCESS' && response.data) {
				const myProfileData = await getProfiles();

				// userProfileInfo.data.yanoljaId만 업데이트
				if (myProfileData?.data) {
					const updatedYanoljaId = myProfileData.data.yanoljaId;

					const storedUserProfileInfo = JSON.parse(
						localStorage.getItem('userProfileInfo') || '{}',
					);
					const updatedUserProfileInfo = {
						...storedUserProfileInfo,
						data: {
							...storedUserProfileInfo.data,
							yanoljaId: updatedYanoljaId,
						},
					};

					localStorage.setItem(
						'userProfileInfo',
						JSON.stringify(updatedUserProfileInfo),
					);
					navigate(`/addproduct`);
				}
			}
			// 응답값 콘솔에 출력
			// console.log('응답값:', response);
		} catch (error) {
			setLoginError('이메일 또는 비밀번호를 확인해주세요.'); // 서버 오류 시 메시지 설정
		}
	};

	const handleForgotPassword = () => {
		window.location.href = 'https://www.yanolja.com/emaillogin';
	};

	const handleBackBtn = () => {
		navigate(-1);
	};

	return (
		<div className="flex flex-col items-center w-full h-screen text-center px-5">
			<div className="flex flex-row w-full items-start mt-[2.1rem] cursor-pointer">
				<ArrowBackIosNewOutlinedIcon
					sx={{ width: '14px' }}
					onClick={handleBackBtn}
				/>
			</div>
			<img className="mt-24" src="/assets/images/yanoljaLogo.svg" alt="logo" />
			<form className="mt-[3.75rem] w-full" onSubmit={handleSubmit}>
				<div className="flex flex-col">
					{' '}
					{/* 에러 메시지와 로그인 버튼을 감싸는 div */}
					<input
						className="border border-borderGray w-full h-11 rounded-xl text-left text-sm pl-1 focus:outline-none"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						className="border border-borderGray w-full h-11 rounded-xl text-left text-sm mt-4 pl-1 focus:outline-none cursor-pointer"
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					{loginError && (
						<div className="text-red text-sm text-left mt-1">{loginError}</div>
					)}
					<button
						type="submit"
						className="border w-full h-11 rounded-xl mt-6 bg-yaLogo text-white text-m cursor-pointer"
					>
						야놀자로 로그인
					</button>
				</div>
				<p
					className="text-sm text-left text-gray mt-1 cursor-pointer"
					onClick={handleForgotPassword}
				>
					비밀번호를 잊으셨나요?
				</p>
			</form>
		</div>
	);
};

export default AddProductYaSignInPage;
