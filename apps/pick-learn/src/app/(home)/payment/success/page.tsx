import { XCircle } from 'lucide-react';

import { MainWrapper } from '@/shared/ui';
import { getPaymentConfirm } from '@/features/payment/api';
import SuccessInfo from '@/views/payment/ui/SuccessInfo';

export default async function SuccessPage({
    searchParams,
}: {
    searchParams: Promise<{
        orderId: string;
        amount: number;
        paymentKey: string;
    }>;
}) {
    const { orderId, amount, paymentKey } = await searchParams;

    const paymentConfirm = orderId
        ? await getPaymentConfirm({
              orderId,
              amount: Number(amount),
              paymentKey,
          })
        : null;

    if (!paymentKey)
        return (
            <MainWrapper className='pt-40'>
                <div className='flex flex-col items-center justify-center min-h-[60vh] px-4'>
                    <div className='mb-6'>
                        <XCircle className='w-20 h-20 text-red-500' />
                    </div>
                    <h3 className='text-2xl font-bold text-center'>
                        접근 불가 페이지 입니다 !
                    </h3>
                </div>
            </MainWrapper>
        );
    if (paymentConfirm === false) return;
    return (
        <MainWrapper className='pt-40'>
            <SuccessInfo orderId={orderId} amount={Number(amount)} />
        </MainWrapper>
    );
}
