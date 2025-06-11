'use client';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { routes } from '@/shared/model/constants/routes';
import { Button } from '@repo/ui/components/base/Button';
import Input from '@repo/ui/components/base/Input/index';
import { signInSchema, SignInSchemaType } from '../model/schema';
import { PasswordInput } from '@/shared/ui';

export default function SignInForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(signInSchema),
        mode: 'onChange',
        defaultValues: {
            loginId: '',
            password: '',
        },
    });

    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    const onSubmit = async (data: { loginId: string; password: string }) => {
        try {
            await signIn('credentials', {
                loginId: data.loginId,
                password: data.password,
                callbackUrl: routes.home,
                redirect: true,
            });
        } catch (error) {
            console.log('🚀 ~ handleSignIn ~ error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 my-10'>
            <Controller
                name='loginId'
                control={control}
                render={({ field }) => (
                    <Input
                        label='아이디'
                        required
                        autoComplete='on'
                        error={errors?.loginId?.message}
                        {...field}
                    />
                )}
            />

            <Controller
                name='password'
                control={control}
                render={({ field }) => (
                    <PasswordInput
                        type='password'
                        label='비밀번호'
                        required
                        autoComplete='on'
                        error={errors?.password?.message}
                        {...field}
                    />
                )}
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
