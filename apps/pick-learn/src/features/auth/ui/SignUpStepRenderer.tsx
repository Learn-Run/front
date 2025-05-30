import type {
    SignUpStateErrorsType,
    SignUpStateType,
    SignUpStepsType,
} from '../model/types';

interface Props {
    currentStep: SignUpStepsType[];
    step: number;
    errors: SignUpStateErrorsType;
    inputValues: SignUpStateType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignUpStepRenderer({
    currentStep,
    step,
    inputValues,
    handleChange,
    errors,
}: Props) {
    return (
        <>
            {currentStep.map(({ id, component: Component }) => (
                <Component
                    key={id}
                    step={step}
                    handleChange={handleChange}
                    errorMessages={errors}
                    inputValues={inputValues}
                />
            ))}
        </>
    );
}
