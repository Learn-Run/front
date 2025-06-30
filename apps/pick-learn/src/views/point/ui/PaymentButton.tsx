'use client';

import { PointListType } from '@/entities/point/api/types';
import { createPayment } from '@/features/payment/api';
import { Button } from '@repo/ui/components/base/Button';
import router from 'next/router';

export default function PaymentButton({ point }: { point: PointListType }) {
    const handlePayment = async () => {
        const response = await createPayment({
            orderName: `${point.point} 포인트 충전`,
            paymentMethod: 'card',
            amount: point.paymentAmount,
            point: point.point,
            bonusPoint: point.bonusPoint,
            totalPoint: point.totalPoint,
        });
        if (response) {
            router.push(response.url);
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
