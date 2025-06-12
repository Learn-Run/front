export interface SignUpStepsType {
    id: number;
    requiredFields: string[];
    component: (args: SignUpStepProps) => React.ReactNode;
}

export interface SignUpStepProps {
    step: number;
}

export type GenderType = '여성' | '남성';

export interface GenderOptionType {
    id: number;
    label: string;
    value: GenderType;
}
