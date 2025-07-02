'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { PaymentHistoryType } from './types';

export const getPaymentHistory = async (
    startDate: string,
    endDate: string,
    cursor: string,
) => {
    const params = new URLSearchParams();
    params.set('startDate', startDate);
    params.set('endDate', endDate);
    params.set('cursor', cursor);

    const response = await fetchData.get<PaymentHistoryType>(
        `${services.payment}/api/v1/payment/info/all?${params.toString()}`,
        { requireAuth: true },
    );
    return response.result;
};
