import type { UseFormReturn, FieldValues } from 'react-hook-form';

import type { SignUpStepsType } from '../model/types';

export const getCurrentStepValidation = <TFieldValues extends FieldValues>(
    currentStep: SignUpStepsType[],
    methods: UseFormReturn<TFieldValues>,
) => {
    const requiredFields = currentStep[0]?.requiredFields ?? [];
    const stepId = currentStep[0]?.id;

    const values = methods.getValues();
    const errors = methods.formState.errors;

    let hasEmptyRequiredFields = false;

    if (stepId === 1) {
        const checkedList = values['agreementCheckList'] as
            | string[]
            | undefined;
        hasEmptyRequiredFields =
            !checkedList ||
            checkedList.length < requiredFields.length ||
            requiredFields.some((uuid) => !checkedList.includes(uuid));
    } else {
        hasEmptyRequiredFields = requiredFields.some((field) => {
            const value = values[field as keyof typeof values];
            return value === undefined || value === '' || value === false;
        });
    }

    const hasErrors = requiredFields.some(
        (field) => !!errors[field as keyof typeof errors],
    );

    return {
        hasErrors,
        hasEmptyRequiredFields,
        isValid: !hasEmptyRequiredFields && !hasErrors,
        requiredFields,
    };
};
