import { fetchData } from '@/shared/api/instance';
import { services } from '@/shared/api/constants';
import { RequestPaymentType } from './types';

export const createPayment = async (paymentInfo: RequestPaymentType) => {
    const response = await fetchData.post(
        `${services.point}/api/v1/payment/request`,
        {
            requireAuth: true,
            body: JSON.stringify(paymentInfo),
        },
    );
    return response.result as {
        url: string;
    };
};
