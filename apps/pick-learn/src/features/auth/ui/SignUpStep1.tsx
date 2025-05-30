import { Check } from '@/shared/assets/icons';
import { Button } from '@repo/ui/components/base/Button';
import Input from '@repo/ui/components/base/Input/index';
import PasswordInput from '@/shared/ui/PasswordInput';

export default function SignUpStep1() {
    return (
        <div className='space-y-4'>
            <div className='flex  gap-x-2'>
                <Input name='account' label='아이디' required>
                    <Check />
                </Input>
                <Button type='button' className='w-fit p-4'>
                    중복검사
                </Button>
            </div>
            <PasswordInput name='password' label='비밀번호' required />
            <PasswordInput
                name='paswwordConfirm'
                label='비밀번호 확인'
                required
            />
        </div>
    );
}
// export default function SignUpStep1() {
//     const handleOAuthKakao = async () => {
//         signIn('kakao', {
//             callbackUrl: '/auth/kakao',
//             redirect: true,
//         });
//     };

//     return (
//         <div className='space-y-4'>
//             <Button
//                 type='button'
//                 variant={'outline'}
//                 onClick={handleOAuthKakao}
//                 className='px-5 py-3'
//             >
//                 <span>로그인 하기</span>
//             </Button>
//             <hr />
//             <p className='text-center'>소셜 로그인으로 시작하기</p>
//             <Button
//                 type='button'
//                 onClick={handleOAuthKakao}
//                 className='w-full bg-[#EFDB2A] hover:bg- text-black px-5 py-3'
//             >
//                 <span>카카오로 시작하기</span>
//             </Button>
//         </div>
//     );
// }
