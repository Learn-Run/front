'use client';
import { CircleDollarSignIcon } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

import { getPointHistory } from '@/entities/point/api';
import { PointHistoryContentType } from '@/entities/point/api/types';
import { useInfiniteScroll } from '@/shared/model/hooks/useInfiniteScroll';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import PointHistoryFilter from './PointHistoryFilter';
import { formatDateToKST } from '@/shared/utils/dateFormat';
import { cn } from '@repo/ui/lib/utils';

export default function PointHistoryList({
    className,
}: {
    className?: string;
}) {
    const [cursor, setCursor] = useState<string>('');
    const [hasNext, setHasNext] = useState<boolean>(true);
    const [pointHistory, setPointHistory] = useState<PointHistoryContentType[]>(
        [],
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

    const fetchPointHistory = useCallback(
        async (nextCursor: string | null = null) => {
            if (isLoading || (!hasNext && nextCursor === null)) return;

            setIsLoading(true);
            try {
                const response = await getPointHistory({
                    cursor: nextCursor || cursor,
                    startDate: startDate
                        ? formatDateToKST(startDate)
                        : undefined,
                    endDate: endDate ? formatDateToKST(endDate) : undefined,
                });
                setPointHistory((prev) => {
                    const all = [...prev, ...response.content];
                    const unique = Array.from(
                        new Map(
                            all.map((item) => [item.memberPointUuid, item]),
                        ).values(),
                    );
                    return unique;
                });
                setHasNext(response.hasNext);
                setCursor(response.nextCursor);
            } catch (error) {
                console.error('포인트 히스토리 조회 실패:', error);
            } finally {
                setIsLoading(false);
            }
        },
        [cursor, hasNext, isLoading, startDate, endDate],
    );

    useEffect(() => {
        fetchPointHistory();
    }, [fetchPointHistory]);

    const handleIntersect = useCallback(() => {
        if (hasNext && !isLoading) {
            fetchPointHistory(cursor);
        }
    }, [hasNext, isLoading, cursor, fetchPointHistory]);

    const targetRef = useInfiniteScroll(handleIntersect, {
        enabled: hasNext && !isLoading,
    });

    return (
        <div className='w-full pb-10'>
            <h2 className='flex items-center px-4 py-3'>
                <p className='text-lg font-bold'>포인트 내역</p>
            </h2>
            <PointHistoryFilter
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                onSearch={() => {
                    setPointHistory([]);
                    setCursor('');
                    setHasNext(true);
                    fetchPointHistory();
                }}
            />
            {pointHistory.length === 0 && !isLoading ? (
                <SectionWrapper className='flex flex-col items-center justify-center'>
                    데이터가 없습니다
                </SectionWrapper>
            ) : (
                <>
                    <ul className={cn('w-full', className)}>
                        {pointHistory.map((item) => (
                            <li
                                key={item.memberPointUuid}
                                className='flex items-center justify-between border-b border-gray-200 py-4 px-4 w-full'
                            >
                                <div className='flex items-center gap-3 flex-1'>
                                    <CircleDollarSignIcon className='w-6 h-6 text-point-yellow-200 flex-shrink-0' />
                                    <div className='flex flex-col gap-1'>
                                        <p className='font-medium'>
                                            {item.delta}포인트
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            {item.type === 'EARN'
                                                ? '충전'
                                                : '웰컴'}
                                        </p>
                                    </div>
                                </div>
                                <p className='text-sm text-gray-500 flex-shrink-0'>
                                    {item.createdAt}
                                </p>
                            </li>
                        ))}
                    </ul>

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
