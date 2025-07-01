'use client';

import { PointListType } from '@/entities/point/api/types';
import { createPayment } from '@/features/payment/api';
import { Button } from '@repo/ui/components/base/Button';

export default function PaymentButton({ point }: { point: PointListType }) {
    const handlePayment = async () => {
        try {
            const checkoutUrl = await createPayment({
                orderName: `${point.point} 포인트 충전`,
                point: point.point,
                bonusPoint: point.bonusPoint,
                paymentAmount: point.paymentAmount,
                paymentMethod: '카드',
            });
            if (checkoutUrl) {
                window.location.href = checkoutUrl;
            }
        } catch (error) {
            console.error('🚀 ~ handlePayment ~ error:', error);
        }
    };
    return (
        <Button
            className='bg-point-blue-200 text-white'
            onClick={handlePayment}
        >
            결제하기
        </Button>
    );
}
