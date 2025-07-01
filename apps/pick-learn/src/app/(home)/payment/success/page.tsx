import { getPaymentConfirm } from '@/features/payment/api';
import { MainWrapper } from '@/shared/ui';
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
    const paymentConfirm = await getPaymentConfirm({
        orderId,
        amount,
        paymentKey,
    });

    console.log('🚀 ~ SuccessPage ~ paymentConfirm:', paymentConfirm);

    if (paymentConfirm === false) return;
    return (
        <MainWrapper className='pt-40'>
            <SuccessInfo orderId={orderId} amount={Number(amount)} />
        </MainWrapper>
    );
}
