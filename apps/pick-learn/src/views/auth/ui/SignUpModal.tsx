'use client';
import React, { useEffect, useState } from 'react';

import { signUpSteps } from '@/features/auth/model/constants';
import AuthHeading from '@/features/auth/ui/AuthHeading';
import Navigator from '@/widgets/auth/ui/Navigator';
import type { SignUpStepsType } from '@/features/auth/model/types';
import SignUpForm from '@/features/auth/ui/SignUpForm';

export default function SignUpModal() {
    const [step, setStep] = useState<number>(signUpSteps[0]?.id || 1);
    const [currentStep, setCurrentStep] = useState<SignUpStepsType[]>([]);

    const handleChangeStep = () => {
        setStep((prev) => {
            if (step >= signUpSteps.length) {
                return prev;
            }
            return prev + 1;
        });
    };

    useEffect(() => {
        const current = signUpSteps.find(({ id }) => id === step);
        if (current) setCurrentStep([current]);
    }, [step]);

    if (currentStep.length === 0) return null;

    return (
        <div className='px-8 py-6 max-w-2xl mx-auto'>
            <Navigator
                step={step}
                setStep={setStep}
                totalStepCount={signUpSteps.length}
                initStep={signUpSteps[0]?.id}
            />
            <AuthHeading className='pt-2 pb-6'>
                <AuthHeading.Title>SIGN UP</AuthHeading.Title>
                <AuthHeading.Desc>
                    나의 질문을 해결하기 위한 여행을 시작합니다.
                </AuthHeading.Desc>
            </AuthHeading>

            <SignUpForm
                step={step}
                handleChangeStep={handleChangeStep}
                currentStep={currentStep}
                totalStep={signUpSteps.length}
            />
        </div>
    );
}
