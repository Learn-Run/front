'use client';
import { CreditCard } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

import { getPaymentHistory } from '@/entities/payment/api';
import { PaymentHistoryContentType } from '@/entities/payment/api/types';
import { useInfiniteScroll } from '@/shared/model/hooks/useInfiniteScroll';
import PaymentHistoryFilter from '@/views/point/ui/PaymentHistoryFilter';
import {
    formatDateToKST,
    formatDateToKSTWithTime,
} from '@/shared/utils/dateFormat';
import { cn } from '@repo/ui/lib/utils';

export default function PaymentHistory({ className }: { className?: string }) {
    const [cursor, setCursor] = useState<string>('');
    const [hasNext, setHasNext] = useState<boolean>(true);
    const [paymentHistory, setPaymentHistory] = useState<
        PaymentHistoryContentType[]
    >([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

    const fetchPaymentHistory = useCallback(
        async (nextCursor: string | null = null) => {
            if (isLoading || (!hasNext && nextCursor === null)) return;

            setIsLoading(true);
            try {
                const response = await getPaymentHistory(
                    startDate ? formatDateToKST(startDate) : '',
                    endDate ? formatDateToKST(endDate) : '',
                    nextCursor || cursor,
                );

                if (response && response.content) {
                    setPaymentHistory((prev) => {
                        const all = [...prev, ...response.content];
                        const unique = Array.from(
                            new Map(
                                all.map((item) => [item.orderId, item]),
                            ).values(),
                        );
                        return unique;
                    });
                    setHasNext(response.hasNext ?? false);
                    setCursor(response.nextCursor);
                } else {
                    console.warn(
                        '결제 히스토리 응답이 올바르지 않습니다:',
                        response,
                    );
                    if (nextCursor === null) {
                        setPaymentHistory([]);
                    }
                    setHasNext(false);
                }
            } catch (error) {
                console.error('결제 히스토리 조회 실패:', error);
                if (nextCursor === null) {
                    setPaymentHistory([]);
                }
                setHasNext(false);
            } finally {
                setIsLoading(false);
            }
        },
        [cursor, hasNext, isLoading, startDate, endDate],
    );

    useEffect(() => {
        fetchPaymentHistory();
    }, [fetchPaymentHistory]);

    const handleIntersect = useCallback(() => {
        if (hasNext && !isLoading) {
            fetchPaymentHistory(cursor);
        }
    }, [hasNext, isLoading, cursor, fetchPaymentHistory]);

    const targetRef = useInfiniteScroll(handleIntersect, {
        enabled: hasNext && !isLoading,
    });

    return (
        <div className='w-full pb-10'>
            <li className='flex items-center px-4 pb-4'>
                <p className='text-lg font-bold'>결제 내역</p>
            </li>
            <PaymentHistoryFilter
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                onSearch={() => {
                    setPaymentHistory([]);
                    setCursor('');
                    setHasNext(true);
                    fetchPaymentHistory();
                }}
            />

            {paymentHistory.length === 0 && !isLoading ? (
                <div className='flex flex-col items-center justify-center py-16 px-4'>
                    <CreditCard className='w-16 h-16 text-gray-300 mb-4' />
                    <p className='text-gray-500 text-lg font-medium'>
                        데이터가 없습니다
                    </p>
                    <p className='text-gray-400 text-sm mt-1'>
                        선택한 기간에 결제 내역이 없습니다.
                    </p>
                </div>
            ) : (
                <>
                    <ul className={cn('w-full', className)}>
                        {paymentHistory.map((item) => (
                            <li
                                key={item.orderId}
                                className='flex items-center justify-between border-b border-gray-200 py-4 px-4 w-full'
                            >
                                <div className='flex items-center gap-3 flex-1'>
                                    <CreditCard className='w-6 h-6 text-blue-600 flex-shrink-0' />
                                    <div className='flex flex-col gap-1'>
                                        <p className='font-medium'>
                                            {item.orderName}
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            {item.paymentMethod} •{' '}
                                            {item.paymentStatus}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-end gap-1'>
                                    <p className='font-bold text-lg'>
                                        {item.totalAmount.toLocaleString()}원
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {item.approvedAt
                                            ? formatDateToKSTWithTime(
                                                  new Date(item.approvedAt),
                                              )
                                            : ''}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* 무한 스크롤 타겟 */}
                    {hasNext && (
                        <div
                            ref={targetRef}
                            className='h-4 flex items-center justify-center'
                        >
                            {isLoading && (
                                <p className='text-sm text-gray-500'>
                                    로딩 중...
                                </p>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
