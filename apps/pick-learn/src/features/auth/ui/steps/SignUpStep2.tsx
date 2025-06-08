'use client';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import PasswordInput from '@/shared/ui/PasswordInput';
import { Button } from '@repo/ui/components/base/Button';
import Input from '@repo/ui/components/base/Input/index';
import { StatusCheckIcon } from '@/shared/ui';
import { checkLoginIdDuplicate, checkNicknameDuplicate } from '../../api';

export default function SignUpStep2() {
    const {
        setValue,
        control,
        setError,
        formState: { errors },
    } = useFormContext();

    const nickname = useWatch({ control, name: 'nickname' });
    const nicknameVerified = useWatch({ control, name: 'nicknameVerified' });
    const loginIdVerified = useWatch({ control, name: 'loginIdVerified' });
    const loginId = useWatch({ control, name: 'loginId' });

    const handleCheckNicknameDuplicate = async (nickname: string) => {
        const result = await checkNicknameDuplicate(nickname);
        console.log('🚀 ~ handleCheckNicknameDuplicate ~ result:', result);

        if (!result)
            setError('nickname', {
                message: '이미 사용 중인 닉네임입니다',
            });

        setValue('nicknameVerified', result);
    };

    const handleCheckLoginIdDuplicate = async (loginId: string) => {
        const result = await checkLoginIdDuplicate(loginId);

        if (!result)
            setError('loginId', {
                message: '이미 사용 중인 아이디입니다',
            });

        setValue('loginIdVerified', result);
    };

    return (
        <div className='space-y-4'>
            <Controller
                name='name'
                control={control}
                render={({ field }) => (
                    <Input
                        label='이름'
                        required
                        error={errors.name?.message as string}
                        {...field}
                    />
                )}
            />

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
                                    nickname !== '' &&
                                    nicknameVerified &&
                                    !errors.nickname?.message
                                }
                            />
                        </Input>
                    )}
                />
                <Button
                    type='button'
                    className='w-fit h-[62px]'
                    onClick={() => handleCheckNicknameDuplicate(nickname)}
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
                                    loginId !== '' &&
                                    loginIdVerified &&
                                    !errors.loginId?.message
                                }
                            />
                        </Input>
                    )}
                />
                <Button
                    type='button'
                    className='w-fit h-[62px]'
                    onClick={() => handleCheckLoginIdDuplicate(loginId)}
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
