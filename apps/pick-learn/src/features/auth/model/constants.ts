import { routes } from '@/shared/model/constants/routes';
import type { SignUpStepsType } from './types';
import { SignUpStep1, SignUpStep2, SignUpStep3 } from '../ui';
import { SignUpSchemaType } from './schema';

export const withAuthList: string[] = [routes.chat];
export const withOutAuthList = [routes.signIn, routes.signUp];

export const signUpSteps: SignUpStepsType[] = [
    {
        id: 1,
        isEnable: false,
        requiredFields: [],
        component: SignUpStep1,
    },
    {
        id: 2,
        isEnable: false,
        requiredFields: [
            'name',
            'nickname',
            'nicknameVerified',
            'loginId',
            'loginIdVerified',
            'password',
            'passwordConfirm',
        ],
        component: SignUpStep2,
    },
    {
        id: 3,
        isEnable: false,
        requiredFields: [
            'email',
            'verificationCode',
            'isEmailVerified',
            'gender',
            'birthDate',
        ],
        component: SignUpStep3,
    },
];

export const DEFAULT_FORM_VALUES: SignUpSchemaType = {
    name: '',
    nickname: '',
    nicknameVerified: false,
    loginId: '',
    loginIdVerified: false,
    password: '',
    passwordConfirm: '',
    email: '',
    verificationCode: '',
    isEmailVerified: false,
    gender: '남성',
    birthDate: new Date(),
    agreementCheckList: [],
};

export const genderOptions = [
    { id: 1, label: '남성', value: '남성' },
    { id: 2, label: '여성', value: '여성' },
];
