import type { SignUpStepsType } from '../model/types';

export interface AgreeTermCheckboxProps {
    agreementName: string;
    required?: boolean;
    agreementUuid: string;
    agreementContent: string;
}

export interface AgreeAllTermsCheckboxProps {
    onChange: (checked: boolean) => void;
}

export interface SignUpFormProps {
    step: number;
    currentStep: SignUpStepsType[];
    handleChangeStep: () => void;
    totalStep: number;
}

export interface SignUpButtonProps {
    isLastStep: boolean;
    isStepValid: boolean;
    handleNextStep: () => Promise<void>;
}

export interface SignUpStepRendererProps {
    currentStep: SignUpStepsType[];
    step: number;
}

export interface OAuthSignUpFormProps {
    step: number;
    currentStep: SignUpStepsType[];
    handleChangeStep: () => void;
    totalStep: number;
}
