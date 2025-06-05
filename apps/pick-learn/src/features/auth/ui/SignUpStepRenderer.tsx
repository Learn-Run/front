import type { SignUpStepsType } from '../model/types';

interface Props {
    currentStep: SignUpStepsType[];
    step: number;
}

export default function SignUpStepRenderer({ currentStep, step }: Props) {
    return (
        <>
            {currentStep.map(({ id, component: Component }) => (
                <Component key={id} step={step} />
            ))}
        </>
    );
}
