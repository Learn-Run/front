import { cn } from '../../lib/utils';

export default function Stepper({
    totalSteps,
    currentStep,
}: {
    totalSteps: number;
    currentStep: number;
}) {
    const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

    return (
        <ul className='flex items-center gap-4 max-w-[148px] w-full'>
            {steps.map((step) => (
                <StepperItem key={step} isActive={step === currentStep} />
            ))}
        </ul>
    );
}

const StepperItem = ({
    className,
    isActive,
}: {
    className?: string;
    isActive: boolean;
}) => {
    return (
        <li
            className={cn(
                'max-w-7 w-full h-[3px]',
                'rounded-full',
                'transition-colors duration-300 ease-in-out',
                isActive ? 'bg-primary-100' : 'bg-primary-100/10',
                className,
            )}
        />
    );
};
