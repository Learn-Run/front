import { Button } from '@repo/ui/components/base/Button';
import type { SignUpButtonProps } from './types';

export const SignUpButton = ({
    isLastStep,
    isStepValid,
    handleNextStep,
}: SignUpButtonProps) => {
    return (
        <Button
            type={isLastStep ? 'submit' : 'button'}
            disabled={!isLastStep && !isStepValid}
            onClick={isLastStep ? undefined : handleNextStep}
            className='w-full bg-primary-100 mt-7 px-6 py-4 justify-baseline'
        >
            {isLastStep ? '회원가입하기' : '다음 단계로'}
        </Button>
    );
};
