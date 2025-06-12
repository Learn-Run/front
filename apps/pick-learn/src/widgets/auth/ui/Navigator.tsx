'use client';
import Back from '@/shared/assets/icons/Back';
import Stepper from '@repo/ui/components/base/Stepper';
import { cn } from '@repo/ui/lib/utils';
import { canGoBack } from '../utils';

type NavigationProps = {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    totalStepCount: number;
    initStep?: number;
};

export default function Navigator({
    step,
    setStep,
    totalStepCount,
    initStep = 1,
}: NavigationProps) {
    function handleBack(
        step: number,
        setStep: React.Dispatch<React.SetStateAction<number>>,
        initStep: number,
    ) {
        if (canGoBack(step, initStep)) {
            setStep((prev) => prev - 1);
        }
    }

    return (
        <section className='grid grid-cols-12 items-center'>
            <button
                type='button'
                disabled={!canGoBack(step, initStep)}
                className={cn(
                    'w-12 h-12 flex items-center justify-center col-span-2',
                    !canGoBack(step, initStep)
                        ? 'hidden disabled:point-events-none'
                        : 'cursor-pointer',
                )}
                onClick={() => handleBack(step, setStep, initStep)}
            >
                <Back />
            </button>

            <div className='col-span-8 justify-items-center'>
                {step > initStep && (
                    <Stepper
                        currentStep={step - 1}
                        totalSteps={totalStepCount - 1}
                    />
                )}
            </div>

            <div className='col-span-2' />
        </section>
    );
}
