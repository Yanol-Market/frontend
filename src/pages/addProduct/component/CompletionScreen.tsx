import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { getAccounts } from '../../../apis/getAccounts';

interface AccountData {
	name: string;
	bankName: string | null;
	accountNumber: string | null;
}

interface Props {
	onComplete: () => void;
	productId?: number;
}

const CompletionScreen = ({ onComplete, productId }: Props) => {
	const navigate = useNavigate();
	const [accountData, setAccountData] = useState<AccountData | null>(null);

	useEffect(() => {
		const fetchAccountData = async () => {
			try {
				const response = await getAccounts();
				if (response.status === 'SUCCESS' && response.data) {
					setAccountData(response.data);
					console.log('계좌 목록:', response.data);
				}
			} catch (error) {
				console.error('계좌 정보를 불러오는 중 오류 발생:', error);
			}
		};

		fetchAccountData();
	}, []);

	const handleProductCheckClick = () => {
		navigate(`/product/${productId}`);
	};

	return (
		<>
			<div className="fixed bg-white top-0 w-[430px] h-[70px] z-20 m-auto flex justify-end items-center">
				<div className="my-auto cursor-pointer pr-5" onClick={onComplete}>
					<CloseIcon sx={{ width: '20px' }} />
				</div>
			</div>
			<div className="w-[430px] fixed top-0 bottom-0 flex flex-col items-center justify-center bg-white z-10">
				<div className="h-[80%] flex flex-col items-center justify-center">
					<img src="/assets/images/check.svg" alt="" />
					<h2 className="text-body font-light	my-[20px]">상품 등록 완료!</h2>
				</div>
				<div className="flex flex-row gap-2 mt-11 text-lg">
					<div className="fixed bottom-7 left-0 right-0 flex justify-center">
						<button
							type="button"
							className={`mx-auto w-[23rem] h-[3.125rem] rounded-xl text-lg text-white bg-main cursor-pointer`}
							onClick={handleProductCheckClick}
						>
							등록된 상품 확인하기
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CompletionScreen;
