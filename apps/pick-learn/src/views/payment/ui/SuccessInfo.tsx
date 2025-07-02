import Link from 'next/link';

import { routes } from '@/shared/model/constants/routes';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import PaymentSuccessMonster from '@/shared/assets/icons/PaymentSuccessMonster';

export default function SuccessInfo({
    orderId,
    amount,
}: {
    orderId: string;
    amount: number;
}) {
    return (
        <SectionWrapper className='flex flex-col items-center justify-center border border-gray-400 rounded-xl p-10 max-w-[550px]'>
            <PaymentSuccessMonster />
            <h3 className='text-2xl font-bold pb-10 whitespace-nowrap'>
                결제가 완료되었습니다 !
            </h3>

            <p>주문번호: {orderId}</p>
            <p className='flex gap-2 pt-4'>
                <span>결제금액:</span>
                <span className='text-xl'>{amount.toLocaleString()}</span>
                <span>원</span>
            </p>
            <div className='flex gap-4 pt-20'>
                <Link
                    href={routes.home}
                    className='text-sm text-primary-100 rounded-xl border border-primary-100 px-4 py-2'
                >
                    Home
                </Link>
                <Link
                    href={`${routes.point}?type=payment`}
                    className='text-sm text-white rounded-xl bg-primary-100 px-4 py-2'
                >
                    결제내역
                </Link>
            </div>
        </SectionWrapper>
    );
}
