import Back from '@/shared/assets/icons/Back';
import Close from '@/shared/assets/icons/Close';
import { useModalContext } from '@/shared/model/modal/ModalContext';
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
    const { closeModal } = useModalContext();

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
        <section
            className={cn(
                'flex items-center',
                !canGoBack(step, initStep) ? 'justify-end' : 'justify-between',
            )}
        >
            <button
                type='button'
                disabled={!canGoBack(step, initStep)}
                className={cn(
                    !canGoBack(step, initStep) ? 'hidden disabled:point-' : '',
                )}
                onClick={() => handleBack(step, setStep, initStep)}
            >
                <Back />
            </button>

            {step > initStep && (
                <Stepper
                    currentStep={step - 1}
                    totalSteps={totalStepCount - 1}
                />
            )}

            <button type='button' onClick={() => closeModal()}>
                <Close />
            </button>
        </section>
    );
}
