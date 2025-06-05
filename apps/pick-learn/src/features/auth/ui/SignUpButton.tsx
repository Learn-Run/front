import { Button } from '@repo/ui/components/base/Button';

export const SignUpButton = ({
    isLastStep,
    isStepValid,
    handleNextStep,
}: {
    isLastStep: boolean;
    isStepValid: boolean;
    handleNextStep: () => Promise<void>;
}) => {
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
