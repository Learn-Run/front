'use client';
import { useState } from 'react';

import type { SignUpStateErrorsType, SignUpStateType } from './types';
import { signUpSchema } from './schema';

export function useSignUpForm(initialState?: SignUpStateType) {
    const defaultState = {
        email: '',
        account: '',
        nickname: '',
        password: '',
        passwordConfirm: '',
        verificationCode: '',
    };

    const [inputValues, setInputValues] = useState<SignUpStateType>(
        initialState || defaultState,
    );
    const [errors, setErrors] = useState<SignUpStateErrorsType>({});

    const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type } = e.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? e.target.checked : e.target.value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const setFieldError = (field: keyof SignUpStateType, message: string) => {
        setErrors((prev) => ({
            ...prev,
            [field]: message,
        }));
    };

    const validate = () => {
        const result = signUpSchema.safeParse(inputValues);
        if (!result.success) {
            const newErrors: ErrorsType = {};
            result.error.errors.forEach((err) => {
                const field = err.path[0] as keyof SignUpStateType;
                newErrors[field] = err.message;
            });
            setErrors(newErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    return {
        inputValues,
        handleChangeValues,
        setInputValues,
        errors,
        setErrors,
        setFieldError,
        validate,
    };
}
