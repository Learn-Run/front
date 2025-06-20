'use client';
import { signIn } from 'next-auth/react';

import { Button } from '@repo/ui/components/base/Button';

export default function OAuthSignIn() {
    const handleOauthSignIn = async (provider: string) => {
        try {
            await signIn(provider);
        } catch (error) {
            console.log('🚀 ~ handleOauthSignIn ~ error:', error);
        }
    };

    return (
        <>
            <hr />

            <p className='text-gray-600 text-center py-6'>또는 간편 로그인</p>

            <Button
                type='button'
                onClick={() => handleOauthSignIn('kakao')}
                className='py-4 bg-[#FAE100] text-black hover:bg-[#FAE100] hover:opacity-80'
            >
                카카오로 로그인하기
            </Button>
        </>
    );
}
