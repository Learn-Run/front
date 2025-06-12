'use client';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import Input from '@repo/ui/components/base/Input/index';
import { checkNicknameDuplicate } from '../../api';
import { Button } from '@repo/ui/components/base/Button';
import { StatusCheckIcon } from '@/shared/ui';

export default function OAuthSignUpStep2() {
    const {
        setValue,
        control,
        setError,
        formState: { errors },
    } = useFormContext();

    const nickname = useWatch({ control, name: 'nickname' });
    const nicknameVerified = useWatch({ control, name: 'nicknameVerified' });

    const handleCheckNicknameDuplicate = async (nickname: string) => {
        const result = await checkNicknameDuplicate(nickname);

        if (!result)
            setError('nickname', {
                message: '이미 사용 중인 닉네임입니다',
            });

        setValue('nicknameVerified', result, { shouldValidate: true });
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
        </div>
    );
}
