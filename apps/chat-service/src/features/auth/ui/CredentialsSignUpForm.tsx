'use client';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { signUpSchema, type SignUpSchemaType } from '../model/schema';
import { getCurrentStepValidation } from '../utils/getCurrentStepValidation';
import { DEFAULT_FORM_VALUES } from '../model/constants';
import { SignUpStepRenderer, SignUpButton } from '.';
import type { SignUpFormProps } from './types';
import { signUp } from '../api';
import { routes } from '@/shared/model/constants/routes';
import { toCredentialSignUpData } from '../utils/convertSignUpData';

export default function CredentialsSignUpForm({
    step,
    currentStep,
    handleChangeStep,
    totalStep,
}: SignUpFormProps) {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const methods = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema),
        mode: 'onChange',
        defaultValues: DEFAULT_FORM_VALUES,
    });

    const isLastStep = step === totalStep;

    const handleSubmit = async (data: SignUpSchemaType) => {
        const signUpData = toCredentialSignUpData(data);

        try {
            await signUp(signUpData);
            router.push(routes.signIn);
        } catch (error) {
            console.log('🚀 ~ handleSubmit ~ error:', error);
            setError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
            throw error;
        }
    };

    const { isValid: isStepValid } = getCurrentStepValidation<SignUpSchemaType>(
        currentStep,
        methods,
    );

    const handleNextStep = async () => {
        const { requiredFields, isValid } =
            getCurrentStepValidation<SignUpSchemaType>(currentStep, methods);

        const triggered = await methods.trigger(
            requiredFields as (keyof SignUpSchemaType)[],
        );

        if (!triggered || !isValid) {
            return;
        }

        handleChangeStep();
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(handleSubmit)}
                className='pt-7'
            >
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
