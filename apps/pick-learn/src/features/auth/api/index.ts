'use server';
import { fetchData } from '@/shared/api/instance';
import type { AgreeTermType } from './types';

export const checkEmailDuplicate = async (email: string) => {
    const result = await fetchData.post(
        '/member-service/api/v1/auth/email/check-duplicate',
        {
            body: JSON.stringify({ email }),
            requireAuth: false,
        },
    );

    if (result.httpStatus === 'CONFLICT') return false;
    return true;
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

    return true;
};

export const getAllAgreeTermsUuid = async () => {
    // const { result } = await fetchData.get<AgreeTermUuidType[]>(
    //     '/member-service/api/v1/agreement/uuid/all', {
    //     cache: 'reload',
    // },
    // );

    // return result;
    return [
        { agreementUuid: '2299559449066622633' },
        { agreementUuid: '6576846395270018630' },
        { agreementUuid: '8555921237459422262' },
        { agreementUuid: '156108840155564981' },
    ] as AgreeTermType[];
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
