import React, { useState } from 'react';
import { getAddProductYaSignIn } from '../../apis/yaSignIn';
import { getProfiles } from '../../apis/getProfile';
import { useNavigate } from 'react-router-dom';

const AddProductYaSignInPage: React.FC = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
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

					console.log('로컬 스토리지 업데이트 완료:', updatedUserProfileInfo);
					navigate(`/addproduct`);
				}
			}
			// 응답값 콘솔에 출력
			console.log('응답값:', response);
		} catch (error) {
			console.error('에러 발생', error);
		}
	};

	const handleForgotPassword = () => {
		navigate('/emaillogin');
	};

	return (
		<div className="flex flex-col items-center w-full h-screen text-center px-5">
			<img className="mt-24" src="/assets/images/yanoljaLogo.svg" alt="logo" />
			<form className="mt-[3.75rem] w-full" onSubmit={handleSubmit}>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm pl-1 focus:outline-none"
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm mt-4 pl-1 focus:outline-none"
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<br />
				<button
					type="submit"
					className="border w-full h-11 rounded-xl mt-6 bg-yaLogo text-white text-m cursor-pointer"
				>
					야놀자로 로그인
				</button>
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
