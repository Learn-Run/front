'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { signUpSchema, SignUpSchemaType } from '../model/schema';
import { SignUpStateType } from '../model/types';
import { getCurrentStepValidation } from '../utils/getCurrentStepValidation';
import { DEFAULT_FORM_VALUES } from '../model/constants';
import { SignUpStepRenderer, SignUpButton } from '../ui';
import type { SignUpFormProps } from './types';
import { signUp } from '../api';
import { RequestSignUpDataType } from '../api/types';
import { redirect } from 'next/navigation';
import { routes } from '@/shared/constants/routes';

export default function SignUpForm({
    step,
    currentStep,
    handleChangeStep,
    totalStep,
}: SignUpFormProps) {
    const methods = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema),
        mode: 'onChange',
        defaultValues: DEFAULT_FORM_VALUES,
    });

    const isLastStep = step === totalStep;

    const handleSubmit = async (data: SignUpStateType) => {
        const agreementCheckList = data.agreementCheckList.map((item) => ({
            agreementUuid: item,
            agreementStatus: true,
        }));

        const signUpData: RequestSignUpDataType = {
            name: data.nickname,
            loginId: data.loginId,
            password: data.password,
            email: data.email,
            birthDate: data.birthDate.toISOString(),
            gender: data.gender,
            nickname: data.nickname,
            agreementCheckList: agreementCheckList,
            userRole: '일반회원',
        };

        try {
            await signUp(signUpData);
            redirect(routes.signIn);
        } catch (error) {
            console.log('🚀 ~ handleSubmit ~ error:', error);
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
                <SignUpButton
                    isLastStep={isLastStep}
                    isStepValid={isStepValid}
                    handleNextStep={handleNextStep}
                />
            </form>
        </FormProvider>
    );
}
