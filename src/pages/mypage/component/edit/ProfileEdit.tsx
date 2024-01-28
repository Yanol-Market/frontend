import React, { useEffect, useState } from 'react';
import { Header } from '../../../../component/common/Header';
import MyPageClickBtn from '../btn/MyPageClickBtn';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { putNickName } from '../../../../apis/putNickname';
import { useNavigate } from 'react-router';
import { getNickName } from '../../../../apis/nickname';
import Swal from 'sweetalert2';

const ProfileEdit = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({ mode: 'onChange' });
	const navigate = useNavigate();
	const myProfileJSON = localStorage.getItem('userProfileInfo');
	const myProfile = JSON.parse(myProfileJSON as string);
	const [myNicknameAvailable, setMyNickNameAvailable] = useState(null);
	const currentNickName = watch('currentNickName');
	const isButtonDisabled = myNicknameAvailable === null || myNicknameAvailable === true || !currentNickName
	useEffect(() => {
		setValue('currentNickName', myProfile.data.nickname);
	}, [myProfile.data.nickname, setValue]);

	const mutation = useMutation({
		mutationFn: putNickName,
		onSuccess() {
			Swal.fire({
				title: '프로필 수정 성공',
				icon: 'success',
			});
			navigate('/');
		},
	});

	const handleCheckNickName = async () => {
		const res = await getNickName(currentNickName);
		setMyNickNameAvailable(res.data);
	};

	const handleProfileEdit = () => {
		const data = { nickname: currentNickName };
		mutation.mutate(data);
	};

	useEffect(() => {
		if (currentNickName === '') {
			setMyNickNameAvailable(null);
		}
	}, [currentNickName]);
	return (
		<div>
			<Header title="프로필 수정" />
			<div className="flex flex-col items-center w-full text-center">
				<img src="/assets/images/profileImage.svg" alt="기본 프로필 이미지" />
				<div className="w-[90%] mt-14">
					<form>
						<div className="relative">
							<div className="flex flex-row justify-between">
								<p className="text-lg">닉네임</p>
								<button
									className={`border border-borderGray absolute cursor-pointer ${myNicknameAvailable === null || myNicknameAvailable ? 'border border-main bg-main text-white' : 'bg-borderGray' } right-2 top-[2.5rem] w-14 h-6 bg-borderGray text-sm text-descGray rounded-md`}
									type="button"
									onClick={handleCheckNickName}
								>
									중복 확인
								</button>
							</div>
							<input
								className={`border ${
									currentNickName &&
									myNicknameAvailable !== null &&
									!myNicknameAvailable
										? 'border-green'
										: 'border-borderGray'
								} w-full h-11 rounded-xl text-botton mt-2 bg-lightGray pl-4 focus:outline-none ${
									(currentNickName && errors.currentNickName) || myNicknameAvailable
										? 'border border-red'
										: ''
								}`}
								type="text"
								{...register('currentNickName', {
									required: true,
									pattern: {
										value: /^[가-힣a-zA-Z0-9]*$/,
										message:
											'특수문자와 띄어쓰기를 제외한 한글, 영문, 숫자로 닉네임을 작성해주세요.',
									},
								})}
							/>
						</div>
						{myNicknameAvailable === null ? (
							<div className="text-sm mb-4 text-start text-red">
								{errors?.currentNickName?.message as string}
							</div>
						) : myNicknameAvailable ? (
							<div className="text-sm mb-4 text-start text-red">
								중복된 닉네임입니다.
							</div>
						) : (
							<div className="text-sm mb-4 text-start text-green">
								사용가능한 닉네임입니다.
							</div>
						)}
						<div className="mt-7">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">휴대폰 번호</p>
							</div>
							<div className="w-full h-11 rounded-xl text-botton mt-2 bg-lightGray pl-4 focus:outline-none">
								<p className="pt-2 text-start text-gray">
									{myProfile.data.phoneNumber}
								</p>
							</div>
						</div>
						<div className="mt-7">
							<div className="flex flex-row justify-between font-bold">
								<p className="text-lg">이메일</p>
							</div>
							<div className="w-full h-11 rounded-xl text-botton mt-2 bg-lightGray pl-4 focus:outline-none">
								<p className="pt-2 text-start text-gray">
									{myProfile.data.email}
								</p>
							</div>
						</div>
						<MyPageClickBtn
							content="변경사항 저장하기"
							onClick={handleProfileEdit}
							isDisabled={isButtonDisabled}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfileEdit;
