import instance from "./axios";
interface DeleteAccountsProps {
    bankName: string;
    accountNumber: string;
}
export const deleteAccounts = async (data:DeleteAccountsProps) => {
    try{
        const res = await instance.delete('/users/account', {
            data: {
                bankName: data.bankName,
                accountNumber: data.accountNumber,
            }
        })
        if(res.status===200){
            alert('계좌 삭제 완료');
        }
    } catch(err){
throw new Error('계좌 삭제 실패');
    }
   
}