import Link from 'next/link';

import { AuthHeading } from '@/features/auth/ui';
import { routes } from '@/shared/constants/routes';
import SignInForm from '@/features/auth/ui/SignInForm';
import OAuthSignIn from '@/features/auth/ui/OAuthSignIn';

export default function SignInContainer() {
    return (
        <div className='px-8 py-6 max-w-2xl mx-auto'>
            <AuthHeading className='pt-2 pb-6'>
                <AuthHeading.Title>LOGIN</AuthHeading.Title>
                <AuthHeading.Desc>
                    나의 질문을 해결하기 위한 여행을 시작합니다.
                </AuthHeading.Desc>
            </AuthHeading>

            <SignInForm />

            <OAuthSignIn />

            <p className='text-gray-600 pt-10 text-center'>
                아직 회원이 아니신가요?
                <Link href={routes.signUp} className='underline pl-2'>
                    회원가입하기
                </Link>
            </p>
        </div>
    );
}
