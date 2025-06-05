export interface SignUpStepsType {
    id: number;
    isEnable: boolean;
    requiredFields: string[];
    component: (args: SignUpStepProps) => React.ReactNode;
}

export interface SignUpStepProps {
    step: number;
}

export interface SignUpStateType {
    nickname: string;
    loginId: string;
    password: string;
    passwordConfirm: string;
    email: string;
    verificationCode: string;
    isEmailVerified: boolean;
    gender: GenderType;
    birthDate: Date;
    agreementCheckList: string[];
    categories: string[];
}

export type GenderType = '여성' | '남성';

export interface GenderOptionType {
    id: number;
    label: string;
    value: GenderType;
}
