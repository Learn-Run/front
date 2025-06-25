'use client';
import { checkNicknameDuplicate } from '@/features/auth/api';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { StatusCheckIcon } from '@/shared/ui';
import { Button } from '@repo/ui/components/base/Button';
import Input from '@repo/ui/components/base/Input/index';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { updateNickname } from '../api';

export default function NickNameEditModal() {
    const {
        handleSubmit,
        setValue,
        control,
        setError,
        formState: { errors },
    } = useForm<{ nickname: string; nicknameVerified: boolean }>();

    const { closeModal } = useModalContext();

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

    const onSubmit = async (data: {
        nickname: string;
        nicknameVerified: boolean;
    }) => {
        try {
            await updateNickname(data.nickname);
            closeModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='p-6'>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
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
                                onChange={(e) => {
                                    field.onChange(e);
                                    setValue('nicknameVerified', false);
                                    setError('nickname', {
                                        message: '',
                                    });
                                }}
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
                <Button
                    type='submit'
                    disabled={!nicknameVerified}
                    onClick={handleSubmit(onSubmit)}
                >
                    확인
                </Button>
            </form>
        </div>
    );
}
