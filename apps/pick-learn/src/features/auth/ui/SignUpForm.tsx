import { Button } from '@repo/ui/components/base/Button';
import { useSignUpForm } from '../model/useSignUpForm';
import SignUpStepRenderer from './SignUpStepRenderer';
import type { SignUpStepsType } from '../model/types';

export default function SignUpForm({
    step,
    currentStep,
    handleChangeStep,
    totalStep,
}: {
    step: number;
    currentStep: SignUpStepsType[];
    handleChangeStep: () => void;
    totalStep: number;
}) {
    const { inputValues, handleChangeValues, errors } = useSignUpForm({
        nickname: '',
        account: '',
        password: '',
        passwordConfirm: '',
        email: '',
        verificationCode: '',
    });

    return (
        <form className='pt-7'>
            <SignUpStepRenderer
                currentStep={currentStep}
                step={step}
                errors={errors}
                inputValues={inputValues}
                handleChange={handleChangeValues}
            />
            <Button
                type='button'
                className='w-full bg-primary-100 mt-7 px-6 py-4 justify-baseline'
                variant={'default'}
                onClick={handleChangeStep}
            >
                {step === 0 || step === totalStep
                    ? '회원가입하기'
                    : '다음 단계로'}
            </Button>
        </form>
    );
}
