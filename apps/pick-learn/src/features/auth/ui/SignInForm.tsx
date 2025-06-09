'use client';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import { routes } from '@/shared/constants/routes';
import { Button } from '@repo/ui/components/base/Button';
import Input from '@repo/ui/components/base/Input/index';

export default function SignInForm() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const loginId = formData.get('loginId');
        const password = formData.get('password');

        try {
            await signIn('credentials', {
                loginId,
                password,
                callbackUrl: routes.home,
                redirect: true,
            });
        } catch (error) {
            console.log('🚀 ~ handleSignIn ~ error:', error);
        }
    };

    return (
        <form onSubmit={onSubmit} className='space-y-4 my-10'>
            <Input name='loginId' label='아이디' required autoComplete='on' />
            <Input
                type='password'
                name='password'
                label='비밀번호'
                required
                autoComplete='on'
            />

            {error ? (
                <p className='text-error text-center text-sm py-3'>
                    로그인 중 문제가 발생했습니다. 잠시후 다시 시도해주세요.
                </p>
            ) : null}

            <Button type='submit' variant={'default'} className='py-4'>
                로그인하기
            </Button>
        </form>
    );
}
