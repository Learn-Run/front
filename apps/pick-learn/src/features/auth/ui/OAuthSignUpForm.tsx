'use client';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';

import { oauthSignUpSchema, type OAuthSignUpSchemaType } from '../model/schema';
import { getCurrentStepValidation } from '../utils/getCurrentStepValidation';
import { OAUTH_DEFAULT_FORM_VALUES } from '../model/constants';
import { SignUpStepRenderer, SignUpButton } from '.';
import type { SignUpFormProps } from './types';
import { oauthSignUp } from '../api';
import { routes } from '@/shared/model/constants/routes';
import { toOAuthSignUpData } from '../utils/convertSignUpData';

export default function OAuthSignUpForm({
    step,
    currentStep,
    handleChangeStep,
    totalStep,
}: SignUpFormProps) {
    const searchParams = useSearchParams();
    const provider = searchParams.get('provider');
    const providerId = searchParams.get('providerId');
    const router = useRouter();

    const [error, setError] = useState<string | null>(null);

    const methods = useForm<OAuthSignUpSchemaType>({
        resolver: zodResolver(oauthSignUpSchema),
        mode: 'onChange',
        defaultValues: OAUTH_DEFAULT_FORM_VALUES,
    });

    const isLastStep = step === totalStep;

    const onSubmit = async (data: OAuthSignUpSchemaType) => {
        try {
            if (provider && providerId) {
                const oauthSignUpData = toOAuthSignUpData(
                    data,
                    provider,
                    providerId,
                );
                await oauthSignUp(oauthSignUpData);
                router.push(routes.signIn);
            }
        } catch (error) {
            setError('회원가입 중 문제가 발생했습니다. 다시 시도해주세요.');
            throw error;
        }
    };

    const { isValid: isStepValid } =
        getCurrentStepValidation<OAuthSignUpSchemaType>(currentStep, methods);

    const handleNextStep = async () => {
        const { requiredFields, isValid } =
            getCurrentStepValidation<OAuthSignUpSchemaType>(
                currentStep,
                methods,
            );

        const triggered = await methods.trigger(
            requiredFields as (keyof OAuthSignUpSchemaType)[],
        );

        if (!triggered || !isValid) {
            return;
        }

        handleChangeStep();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <SignUpStepRenderer step={step} currentStep={currentStep} />
                {error ? (
                    <p className='text-error text-sm text-center'>{error}</p>
                ) : null}
                <SignUpButton
                    isLastStep={isLastStep}
                    isStepValid={isStepValid}
                    handleNextStep={handleNextStep}
                />
            </form>
        </FormProvider>
    );
}
