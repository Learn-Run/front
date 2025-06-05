'use client';
import { useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import IconCalendar from '@/shared/assets/icons/IconCalendar';
import { dateFormat } from '@/shared/utils/dateFormat';
import { Button } from '@repo/ui/components/base/Button';
import { Calendar } from '@repo/ui/components/base/Calendar';
import Input from '@repo/ui/components/base/Input/index';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@repo/ui/components/base/Popover';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@repo/ui/components/base/Select';
import { cn } from '@repo/ui/lib/utils';
import { genderOptions } from '../../model/constants';
import { useDebounce } from '@/shared/model/useDebounce';
import { checkEmailDuplicate, sendEmailCode } from '../../api';
import { StatusCheckIcon } from '@/shared/ui';

export default function SignUpStep3() {
    const {
        control,
        formState: { errors },
        setError,
        clearErrors,
    } = useFormContext();

    const email = useWatch({ control, name: 'email' });
    const debouncedEmail = useDebounce(email, 200);

    useEffect(() => {
        if (!debouncedEmail) return;

        const handleCheckEmailDuplicate = async () => {
            try {
                const result = await checkEmailDuplicate(debouncedEmail);

                if (!result) {
                    setError('email', {
                        message: '이미 사용 중인 이메일입니다.',
                    });
                } else {
                    clearErrors('email');
                }
            } catch {
                setError('email', {
                    message: '이메일 확인 중 오류가 발생했습니다.',
                });
            }
        };

        handleCheckEmailDuplicate();
    }, [debouncedEmail, setError, clearErrors]);

    const _handleRequestEmailVerification = async () => {
        const currentEmail = control._formValues.email;
        if (!currentEmail) {
            setError('email', { message: '이메일을 입력해주세요.' });
            return;
        }

        try {
            const response = await sendEmailCode(currentEmail);

            if (!response) {
                setError('email', {
                    message: '인증 메일 전송에 실패했습니다.',
                });
                return;
            }

            clearErrors('email');
        } catch (error) {
            setError('email', {
                message: '인증 메일 전송 중 오류가 발생했습니다.',
            });

            throw error;
        }
    };

    return (
        <div className='space-y-4'>
            <div className='flex items-start gap-x-2'>
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                        <Input
                            label='이메일'
                            error={errors.email?.message as string}
                            {...field}
                        >
                            <StatusCheckIcon
                                status={email !== '' && !errors.email?.message}
                            />
                        </Input>
                    )}
                />
                <Button
                    type='button'
                    disabled={!!errors.email?.message}
                    className='w-fit h-[62px]'
                >
                    인증 요청
                </Button>
            </div>

            <div className='flex gap-x-2'>
                <Controller
                    name='verificationCode'
                    control={control}
                    render={({ field }) => (
                        <Input
                            label='인증 코드'
                            error={errors.verificationCode?.message as string}
                            required
                            {...field}
                        >
                            <p>04:53</p>
                        </Input>
                    )}
                />
                <Button type='button' className='w-fit h-[62px]'>
                    인증 확인
                </Button>
            </div>

            <Controller
                name='birthDate'
                control={control}
                render={({ field }) => (
                    <>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant='outline'
                                    className={cn(
                                        'w-full justify-between text-left font-normal border-gray-300 py-3',
                                        !field.value && 'text-muted-foreground',
                                    )}
                                >
                                    {field.value ? (
                                        <span>{dateFormat(field.value)}</span>
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                    <IconCalendar />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-auto p-0'>
                                <Calendar
                                    mode='single'
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        {errors.birthDate?.message ? (
                            <p className='text-sm text-error-200 pt-1 pl-3'>
                                {errors.birthDate?.message as string}
                            </p>
                        ) : null}
                    </>
                )}
            />

            <Controller
                name='gender'
                control={control}
                render={({ field }) => (
                    <>
                        <Select
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <SelectTrigger className='w-full border-gray-300 py-3'>
                                <SelectValue placeholder='성별' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>성별</SelectLabel>
                                    {genderOptions.map((gender) => (
                                        <SelectItem
                                            key={gender.id}
                                            value={gender.value}
                                        >
                                            {gender.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {errors.gender?.message ? (
                            <p className='text-sm text-error-200 pt-1 pl-3'>
                                {errors.gender?.message as string}
                            </p>
                        ) : null}
                    </>
                )}
            />
        </div>
    );
}
