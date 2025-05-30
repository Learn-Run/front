export interface SignUpStepsType {
    id: number;
    isEnable: boolean;
    requiredFields: string[];
    component: (args: SignUpStepProps) => React.ReactNode;
}

export interface SignUpStepProps {
    step: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessages: Partial<SignUpStateType>;
    inputValues: SignUpStateType;
}

export interface SignUpStateType {
    email: string;
    verificationCode: string;
    nickname: string;
    account: string;
    password: string;
    passwordConfirm: string;
}

export type SignUpStateErrorsType = Partial<
    Record<keyof SignUpStateType, string>
>;
