import React from 'react';
import { Header } from '../../component/common/Header';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { findEmail } from '../../apis/findEmail';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FindPassword = () => {
	const {
		register,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });
	const navigate = useNavigate();
	const findEmailText = watch('findEmail');

	const mutation = useMutation({
		mutationFn: findEmail,
		onSuccess() {
			Swal.fire({
				title: '임시 비밀번호가 발급되었습니다. 이메일을 확인해주세요',
				icon: 'success',
			});
			navigate('/signin');
		},
		onError() {
			alert('유저 정보가 존재하지 않습니다.');
			Swal.fire({
				title: '유저 정보가 존재하지 않습니다.',
				icon: 'error',
			});
		},
	});

	const handleFindEmail = () => {
		if (!findEmailText) {
			return;
		}
		const data = { email: findEmailText };
		mutation.mutate(data);
	};
	return (
		<div className="w-full">
			<Header title="비밀번호 찾기" />
			<form className="w-[90%] mx-auto">
				<p className="text-start text-lg font-medium mt-11 mb-5">
					가입할 때 사용한 이메일을 입력하시면 <br />
					임시 비밀번호를 발송해드립니다.
				</p>
				<div className="relative">
					<input
						className="w-full h-11 border border-borderGray rounded-xl text-m pl-2 focus:outline-none"
						type="text"
						placeholder="이메일"
						{...register('findEmail', {
							required: true,
						})}
					/>
					<button
						type="button"
						className="absolute right-3 top-2.5 bottom-0 border border-borderGray bg-borderGray w-1/4 h-6 rounded-md text-sm"
						onClick={handleFindEmail}
					>
						임시번호 받기
					</button>
				</div>
			</form>
		</div>
	);
};

export default FindPassword;
