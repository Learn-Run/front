'use server';
import { fetchData } from '@/shared/api/instance';
import type {
    AgreeTermType,
    AgreeTermUuidType,
    RequestSignUpDataType,
} from './types';

export const checkLoginIdDuplicate = async (loginId: string) => {
    const result = await fetchData.post(
        '/member-service/api/v1/auth/login-id/check-duplicate',
        {
            body: JSON.stringify({ loginId }),
        },
    );

    if (result.httpStatus === 'CONFLICT') return false;

    return result.isSuccess;
};

export const checkNicknameDuplicate = async (nickname: string) => {
    const result = await fetchData.post(
        '/profile-service/api/v1/profile/nickname/check-duplicate',
        {
            body: JSON.stringify({ nickname }),
        },
    );
    console.log('🚀 ~ checkNicknameDuplicate ~ result:', result);

    if (result.httpStatus === 'CONFLICT') return false;

    return result.isSuccess;
};

export const checkEmailDuplicate = async (email: string) => {
    const result = await fetchData.post(
        '/member-service/api/v1/auth/email/check-duplicate',
        {
            body: JSON.stringify({ email }),
        },
    );

    if (result.httpStatus === 'CONFLICT') return false;

    return result.isSuccess;
};

export const sendEmailCode = async (email: string) => {
    const result = await fetchData.post(
        '/member-service/api/v1/email/send-code',
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
        '/member-service/api/v1/email/verify-code',
        {
            body: JSON.stringify({ email, verificationCode }),
        },
    );

    return result;
};

export const getAllAgreeTermsUuid = async () => {
    const { result } = await fetchData.get<AgreeTermUuidType[]>(
        '/member-service/api/v1/agreement/uuid/all',
        {
            cache: 'reload',
        },
    );

    return result;
};

export const getAgreeTermsByUuid = async (uuid: string) => {
    const { result } = await fetchData.get<AgreeTermType>(
        `/member-service/api/v1/agreement/${uuid}`,
        {
            cache: 'reload',
        },
    );

    return result;
};

export const signUp = async (data: RequestSignUpDataType) => {
    const result = await fetchData.post('/member-service/api/v1/auth/sign-up', {
        body: JSON.stringify(data),
    });
    console.log('🚀 ~ signUp ~ result:', result);
};
