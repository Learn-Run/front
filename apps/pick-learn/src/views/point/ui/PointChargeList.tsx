import PaymentButton from './PaymentButton';
import { getPointList } from '@/entities/point/api';

export default async function PointChargeList() {
    const pointList = await getPointList();

    return (
        <div className='flex flex-col gap-y-4 w-full'>
            <ul className='bg-point-blue-100 rounded-lg p-4 w-full flex flex-col gap-y-2'>
                <li className='flex justify-between text-semibold border-b border-gray-500 pb-2 font-bold'>
                    포인트
                </li>
                {pointList.map((item) => (
                    <li
                        key={item.point}
                        className='flex justify-between border-b border-gray-400 py-2'
                    >
                        <div className='flex-1'>
                            {item.bonusPoint > 0 ? (
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex gap-x-3 items-center'>
                                        <span className='font-semibold text-lg text-blue-600'>
                                            {item.totalPoint}
                                            포인트
                                        </span>
                                        <span className='line-through text-sm text-gray-500'>
                                            {item.point}포인트
                                        </span>
                                    </div>
                                    <span className='text-xs text-green-600 font-medium'>
                                        +{item.bonusPoint}
                                        보너스 포인트!
                                    </span>
                                </div>
                            ) : (
                                <span className='font-semibold text-lg'>
                                    {item.point}포인트
                                </span>
                            )}
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='font-bold text-lg min-w-[80px] text-right'>
                                {item.paymentAmount}원
                            </span>
                            <PaymentButton point={item} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
