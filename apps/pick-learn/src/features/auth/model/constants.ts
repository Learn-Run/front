import { routes } from '@/shared/constants/routes';
import type { SignUpStepsType } from './types';
import { SignUpStep1, SignUpStep2, SignUpStep3, SignUpStep4 } from '../ui';

export const withAuthList: string[] = [routes.chat];

export const signUpSteps: SignUpStepsType[] = [
    {
        id: 1,
        isEnable: false,
        requiredFields: ['nickname', 'account', 'password', 'passwordConfirm'],
        component: SignUpStep1,
    },
    {
        id: 2,
        isEnable: false,
        requiredFields: [
            'email',
            'verificationCode',
            'gender',
            'birthDate',
            'agreeTerms',
        ],
        component: SignUpStep2,
    },
    {
        id: 3,
        isEnable: false,
        requiredFields: [],
        component: SignUpStep3,
    },
    {
        id: 4,
        isEnable: false,
        requiredFields: [],
        component: SignUpStep4,
    },
];

// export const signUpSteps: SignUpStepsType[] = [
//     {
//         id: 1,
//         isEnable: false,
//         requiredFields: [],
//         component: SignUpStep1,
//     },
//     {
//         id: 2,
//         isEnable: false,
//         requiredFields: ['nickname', 'account', 'password', 'passwordConfirm'],
//         component: SignUpStep2,
//     },
//     {
//         id: 3,
//         isEnable: false,
//         requiredFields: [
//             'email',
//             'verificationCode',
//             'gender',
//             'birthDate',
//             'agreeTerms',
//         ],
//         component: SignUpStep3,
//     },
//     {
//         id: 4,
//         isEnable: false,
//         requiredFields: [],
//         component: SignUpStep4,
//     },
//     {
//         id: 5,
//         isEnable: false,
//         requiredFields: [],
//         component: SignUpStep5,
//     },
// ];
