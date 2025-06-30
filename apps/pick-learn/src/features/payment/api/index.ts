'use server';
import { fetchData } from '@/shared/api/instance';
import { services } from '@/shared/api/constants';
import { RequestPaymentType } from './types';

export const createPayment = async (paymentInfo: RequestPaymentType) => {
    const response = await fetchData.post<{ checkoutUrl: string }>(
        `${services.payment}/api/v1/payment/order/request`,
        {
            requireAuth: true,
            body: JSON.stringify(paymentInfo),
        },
    );
    return response.result.checkoutUrl;
};
