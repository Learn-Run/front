'use client';
import React, { useEffect, useState } from 'react';

import { signUpSteps } from '@/features/auth/model/constants';
import AuthHeading from '@/features/auth/ui/AuthHeading';
import { Modal } from '@repo/ui/components/base/modal';
import { Button } from '@repo/ui/components/base/button';
import { SignUpStateType, SignUpStepsType } from '@/features/auth/model/types';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import Navigator from '@/widgets/auth/ui/Navigator';
import { stepList } from '../home/model/constants';

export interface SignUpStepProps {
    step: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessages: Partial<SignUpStateType>;
    inputValues: SignUpStateType;
}

export default function SignUpStepper() {
    const [step, setStep] = useState(0);
    const [currentStep, setCurrentStep] = useState<SignUpStepsType[]>([]);
    const [inputValues, setInputValues] = useState<SignUpStateType>({
        nickname: '',
        account: '',
        password: '',
        passwordConfirm: '',
        email: '',
        verificationCode: '',
    });
    const { isOpen, closeModal } = useModalContext();

    useEffect(() => {
        const current = signUpSteps.find(({ id }) => id === step);
        if (current) {
            setCurrentStep([current]);
        }
    }, [step]);

    const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type } = e.target;

        if (type === 'checkbox') {
            setInputValues((prev) => ({
                ...prev,
                [name]: e.target.checked,
            }));
            return;
        }

        setInputValues((prev) => ({
            ...prev,
            [name]: e.target.value,
        }));
    };

    if (currentStep.length === 0) return;

    return (
        <Modal
            onClose={closeModal}
            open={isOpen}
            className='max-w-[692px] w-full pt-6 px-9 pb-10'
        >
            <Navigator
                step={step}
                setStep={setStep}
                initStep={stepList[0]?.id}
                totalStepCount={stepList.length}
            />
            <AuthHeading>
                <AuthHeading.Title>SIGN UP</AuthHeading.Title>
                <AuthHeading.Desc>
                    나의 질문을 해결하기 위한 여행을 시작합니다.
                </AuthHeading.Desc>
            </AuthHeading>

            <form className='pt-7'>
                {currentStep.map(({ id, component: Component }) => (
                    <React.Fragment key={id}>
                        <Component
                            key={id}
                            step={step}
                            handleChange={(e) => handleChangeValues(e)}
                            errorMessages={{}}
                            inputValues={inputValues}
                        />
                    </React.Fragment>
                ))}

                <Button
                    type='button'
                    className='w-full bg-primary-100 mt-7'
                    onClick={() =>
                        setStep((prev) => {
                            if (signUpSteps.length - 1 <= prev) return prev;
                            return prev + 1;
                        })
                    }
                >
                    {step === 0 || step === signUpSteps.length - 1
                        ? '회원가입하기'
                        : '다음 단계로'}
                </Button>
            </form>
        </Modal>
    );
}
