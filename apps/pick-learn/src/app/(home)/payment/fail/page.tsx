import { MainWrapper } from '@/shared/ui';
import PaymentFailView from '@/views/payment/ui/PaymentFailView';

export default function Failpage() {
    return (
        <MainWrapper className='pt-40'>
            <PaymentFailView />
        </MainWrapper>
    );
}
