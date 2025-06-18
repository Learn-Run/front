import type { SignUpStepRendererProps } from './types';

export default function SignUpStepRenderer({
    currentStep,
    step,
}: SignUpStepRendererProps) {
    return (
        <>
            {currentStep.map(({ id, component: Component }) => (
                <Component key={id} step={step} />
            ))}
        </>
    );
}
