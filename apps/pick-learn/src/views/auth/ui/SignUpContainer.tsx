'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { signUpSteps } from '@/features/auth/model/constants';
import AuthHeading from '@/features/auth/ui/AuthHeading';
import Navigator from '@/widgets/auth/ui/Navigator';
import type { SignUpStepsType } from '@/features/auth/model/types';
import SignUpForm from '@/features/auth/ui/SignUpForm';
import { routes } from '@/shared/constants/routes';
import { getAgreeTermsByUuid, getAllAgreeTermsUuid } from '@/features/auth/api';
import { applyServerFields } from '@/features/auth/model/applyServerFields';

export default function SignUpContainer() {
    const [allSteps, setAllSteps] = useState(signUpSteps);
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
        getAllAgreeTermsUuid().then(async (uuidList) => {
            const termDetails = await Promise.all(
                uuidList.map(({ agreementUuid }) =>
                    getAgreeTermsByUuid(agreementUuid),
                ),
            );
            setAllSteps(applyServerFields(signUpSteps, termDetails));
        });
    }, []);

    useEffect(() => {
        const current = allSteps.find(({ id }) => id === step);
        if (current) setCurrentStep([current]);
    }, [step, allSteps]);

    if (currentStep.length === 0) return null;

    return (
        <div className='px-8 py-6 max-w-2xl mx-auto'>
            <Navigator
                step={step}
                setStep={setStep}
                totalStepCount={allSteps.length}
                initStep={allSteps[0]?.id}
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
                totalStep={allSteps.length}
            />

            {step === allSteps[0]?.id ? (
                <>
                    <hr className='my-7' />
                    <p className='text-sm text-center text-gray-700'>
                        이미 회원이신가요?
                        <Link
                            href={routes.signIn}
                            className='ml-2 underline font-medium'
                        >
                            로그인
                        </Link>
                    </p>
                </>
            ) : null}
        </div>
    );
}
