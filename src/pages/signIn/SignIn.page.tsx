import React from 'react';
import { useMutation } from '@tanstack/react-query';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getSignIn } from '../../apis/signin';
import { setCookie } from '../../apis/cookie';
import { Header } from '../../component/common/Header';

const SignIn = () => {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors }, // isSubmitting, isDirty, isValid
	} = useForm({ mode: 'onChange' });

	const userId = watch('userid');
	const userPassword = watch('userpassword');
	const navigate = useNavigate();
	const mutation = useMutation({
		mutationFn: getSignIn,
		onSuccess(data) {
			const { accessToken, refreshToken } = data.data;
			setCookie('accessToken', accessToken, { path: '/' });
			setCookie('refreshToken', refreshToken, { path: '/' });
			navigate('/');
		},
		onError(err) {
			console.error(err);
			setError('errorEmail', { message: '이메일 및 비밀번호를 확인해주세요' });
			throw new Error('로그인 실패');
		},
	});

	const handleSignIn = () => {
		const data = { email: userId, password: userPassword };
		mutation.mutate(data);
	};

	const handleSignUp = () => {
		navigate('/signup');
	};

	const handleBackBtn = () => {
		navigate(-1);
	};
	return (
		<div className="flex flex-col items-center w-full h-screen text-center px-5">
			<div className="flex flex-row w-full items-start mt-3 cursor-pointer">
				<ArrowBackIosNewOutlinedIcon
					sx={{ width: '14px' }}
					onClick={handleBackBtn}
				/>
			</div>
			<img className="mt-24" src="/assets/images/mainLogo.svg" alt="logo" />
			<form
				className="mt-[3.75rem] w-full"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm pl-1 focus:outline-none"
					type="text"
					placeholder="이메일"
					{...register('userid', {
						required: true,
					})}
				/>
				<input
					className="border border-borderGray w-full h-11 rounded-xl text-left text-sm mt-4 pl-1 focus:outline-none"
					type="password"
					placeholder="비밀번호"
					{...register('userpassword', {
						required: true,
					})}
				/>

				{errors.errorEmail ? (
					<div className="text-red text-sm text-left mt-1">
						<p>{errors.errorEmail.message as string}</p>
					</div>
				) : (
					''
				)}
				<div>
					<button
						type="submit"
						className="border w-full h-11 rounded-xl mt-6 bg-main text-white text-m cursor-pointer"
						onClick={handleSignIn}
					>
						로그인
					</button>
					<Link to="/findpassword">
						<p className="text-sm text-left text-gray mt-1 cursor-pointer">
							비밀번호를 잊으셨나요?
						</p>
					</Link>
				</div>
			</form>
			<div className="w-full mt-[3.75rem]">
				<Link to="/yasignin">
					<button
						type="button"
						className="border border-borderGray bg-yaLogo flex items-center w-full h-11 rounded-xl text-gray text-m"
					>
						<img
							className="ml-6"
							src="/assets/images/yaLogo.svg"
							alt="야놀자 로고"
						/>
						<span className="text-center w-2/3 ml-2 text-white">
							야놀자로 로그인
						</span>
					</button>
				</Link>
				<button
					type="submit"
					className="border border-borderGray flex items-center w-full h-11 rounded-xl text-gray text-m mt-3"
					onClick={handleSignUp}
				>
					<img
						className="ml-6"
						src="/assets/images/emailLogo.svg"
						alt="이메일 로고"
					/>
					<span className="w-2/3 ml-2 text-center">회원가입</span>
				</button>
				<Link to="/">
					<p className="mt-11 text-lg text-gray underline underline-offset-1">
						로그인 하지 않고 둘러볼게요!
					</p>
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
