'use server';
import { fetchData } from '@/shared/api/instance';
import type {
    AgreeTermType,
    AgreeTermUuidType,
    RequestOAuthSignUpDataType,
    RequestSignUpDataType,
} from './types';
import { services } from '@/shared/api/constants';

export const checkLoginIdDuplicate = async (loginId: string) => {
    const result = await fetchData.post(
        `${services.member}/api/v1/auth/login-id/check-duplicate`,
        {
            body: JSON.stringify({ loginId }),
            cache: 'no-cache',
        },
    );

    if (result.httpStatus === 'CONFLICT') return false;

    return result.isSuccess;
};

export const checkNicknameDuplicate = async (nickname: string) => {
    const result = await fetchData.post(
        `${services.profile}/api/v1/profile/nickname/check-duplicate`,
        {
            body: JSON.stringify({ nickname }),
            cache: 'no-cache',
        },
    );

    if (result.httpStatus === 'CONFLICT') return false;

    return result.isSuccess;
};

export const checkEmailDuplicate = async (email: string) => {
    const result = await fetchData.post(
        `${services.member}/api/v1/member/email/check-duplicate`,
        {
            body: JSON.stringify({ email }),
            cache: 'no-cache',
        },
    );

    if (result.httpStatus === 'CONFLICT') return result;

    return result;
};

export const sendEmailCode = async (email: string) => {
    const result = await fetchData.post(
        `${services.member}/api/v1/email/send-code`,
        {
            body: JSON.stringify({ email }),
        },
    );

    if (
        result.httpStatus === 'EMAIL_SEND_FAIL' ||
        result.httpStatus === 'EMAIL_ENCODING_ERROR'
    ) {
        return false;
    }

    return result.isSuccess;
};

export const checkVerificationCode = async (
    email: string,
    verificationCode: string,
) => {
    const result = await fetchData.post(
        `${services.member}/api/v1/email/verify-code`,
        {
            body: JSON.stringify({ email, verificationCode }),
        },
    );

    return result;
};

export const getAllAgreeTermsUuid = async () => {
    const { result } = await fetchData.get<AgreeTermUuidType[]>(
        `${services.member}/api/v1/agreement/uuid/all`,
        {
            cache: 'no-cache',
        },
    );

    return result;
};

export const getAgreeTermsByUuid = async (uuid: string) => {
    const { result } = await fetchData.get<AgreeTermType>(
        `${services.member}/api/v1/agreement/${uuid}`,
        {
            cache: 'no-cache',
        },
    );

    return result;
};

export const signUp = async (data: RequestSignUpDataType) => {
    const { result } = await fetchData.post(
        `${services.member}/api/v1/auth/sign-up`,
        {
            body: JSON.stringify(data),
        },
    );

    return result;
};

export const oauthSignUp = async (data: RequestOAuthSignUpDataType) => {
    const { result } = await fetchData.post(
        `${services.member}/api/v1/oauth/sign-up`,
        {
            body: JSON.stringify(data),
        },
    );

    return result;
};

export const createAgreement = async (agreement: {
    agreementName: string;
    agreementContent: string;
    required: boolean;
}) => {
    await fetchData.post(`${services.member}/api/v1/agreement`, {
        body: JSON.stringify(agreement),
    });
};
