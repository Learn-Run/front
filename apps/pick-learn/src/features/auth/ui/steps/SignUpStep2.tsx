'use client';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import PasswordInput from '@/shared/ui/PasswordInput';
import { Button } from '@repo/ui/components/base/Button';
import Input from '@repo/ui/components/base/Input/index';
import { StatusCheckIcon } from '@/shared/ui';

export default function SignUpStep2() {
    const {
        setValue,
        control,
        formState: { errors },
    } = useFormContext();

    const nicknameVerified = useWatch({ control, name: 'nicknameVerified' });
    const loginIdVerified = useWatch({ control, name: 'loginIdVerified' });

    return (
        <div className='space-y-4'>
            <div className='flex items-start gap-x-2'>
                <Controller
                    name='nickname'
                    control={control}
                    render={({ field }) => (
                        <Input
                            label='닉네임'
                            required
                            error={errors.nickname?.message as string}
                            {...field}
                        >
                            <StatusCheckIcon
                                status={
                                    !nicknameVerified &&
                                    !errors.nickname?.message
                                }
                            />
                        </Input>
                    )}
                />
                <Button
                    type='button'
                    disabled={!!errors.nickname?.message}
                    className='w-fit h-[62px]'
                    onClick={() => setValue('nicknameVerified', true)}
                >
                    중복검사
                </Button>
            </div>

            <div className='flex gap-x-2'>
                <Controller
                    name='loginId'
                    control={control}
                    render={({ field }) => (
                        <Input
                            label='아이디'
                            required
                            error={errors.loginId?.message as string}
                            {...field}
                        >
                            <StatusCheckIcon
                                status={
                                    !loginIdVerified && !errors.loginId?.message
                                }
                            />
                        </Input>
                    )}
                />
                <Button
                    type='button'
                    disabled={!!errors.loginId?.message}
                    className='w-fit h-[62px]'
                    onClick={() => setValue('loginIdVerified', true)}
                >
                    중복검사
                </Button>
            </div>

            <Controller
                name='password'
                control={control}
                render={({ field }) => (
                    <PasswordInput
                        label='비밀번호'
                        required
                        error={errors.password?.message as string}
                        {...field}
                    />
                )}
            />

            <Controller
                name='passwordConfirm'
                control={control}
                render={({ field }) => (
                    <PasswordInput
                        label='비밀번호 확인'
                        required
                        error={errors.passwordConfirm?.message as string}
                        {...field}
                    />
                )}
            />
        </div>
    );
}
