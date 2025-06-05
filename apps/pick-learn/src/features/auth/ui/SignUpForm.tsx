'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { signUpSchema, SignUpSchemaType } from '../model/schema';
import { SignUpStateType, SignUpStepsType } from '../model/types';
import { getCurrentStepValidation } from '../utils/getCurrentStepValidation';
import { DEFAULT_FORM_VALUES } from '../model/constants';
import { SignUpStepRenderer, SignUpButton } from '../ui';

interface SignUpFormProps {
    step: number;
    currentStep: SignUpStepsType[];
    handleChangeStep: () => void;
    totalStep: number;
}

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
        console.log('🚀 ~ onSubmit ~ data:', data);
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
