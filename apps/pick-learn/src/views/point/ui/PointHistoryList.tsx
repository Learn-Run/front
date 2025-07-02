'use client';
import { CircleDollarSignIcon } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

import { getPointHistory } from '@/entities/point/api';
import { PointHistoryContentType } from '@/entities/point/api/types';
import { useInfiniteScroll } from '@/shared/model/hooks/useInfiniteScroll';
import PointHistoryFilter from './PointHistoryFilter';
import {
    formatDateToKST,
    formatDateToKSTWithTime,
} from '@/shared/utils/dateFormat';
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
            <div className='px-4 pb-4'>
                <h2 className='text-xl font-bold text-gray-900 mb-2'>
                    포인트 내역
                </h2>
                <p className='text-sm text-gray-600'>
                    포인트 충전 및 사용 내역을 확인할 수 있습니다.
                </p>
            </div>

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
                <div className='flex flex-col items-center justify-center py-16 px-4'>
                    <CircleDollarSignIcon className='w-16 h-16 text-gray-300 mb-4' />
                    <p className='text-gray-500 text-lg font-medium'>
                        데이터가 없습니다
                    </p>
                    <p className='text-gray-400 text-sm mt-1'>
                        선택한 기간에 포인트 내역이 없습니다.
                    </p>
                </div>
            ) : (
                <>
                    <ul className={cn('w-full', className)}>
                        {pointHistory.map((item) => (
                            <li
                                key={item.memberPointUuid}
                                className='flex items-center justify-between border-b border-gray-100 py-4 px-4 w-full hover:bg-gray-50 transition-colors duration-150'
                            >
                                <div className='flex items-center gap-3 flex-1'>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-2'>
                                            <p
                                                className={`font-semibold text-lg ${
                                                    item.type === 'EARN'
                                                        ? 'text-blue-600'
                                                        : 'text-green-600'
                                                }`}
                                            >
                                                {item.type === 'EARN'
                                                    ? '+'
                                                    : ''}
                                                {item.delta}포인트
                                            </p>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    item.type === 'EARN'
                                                        ? 'bg-blue-100 text-blue-700'
                                                        : 'bg-green-100 text-green-700'
                                                }`}
                                            >
                                                {item.type === 'EARN'
                                                    ? '충전'
                                                    : '웰컴'}
                                            </span>
                                        </div>
                                        <p className='text-sm text-gray-500'>
                                            보유: {item.point}포인트
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-end gap-1'>
                                    <p className='text-sm text-gray-500'>
                                        {formatDateToKSTWithTime(
                                            new Date(item.createdAt),
                                        )}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {hasNext && (
                        <div
                            ref={targetRef}
                            className='h-12 flex items-center justify-center'
                        >
                            {isLoading && (
                                <div className='flex items-center gap-2'>
                                    <div className='w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin'></div>
                                    <p className='text-sm text-gray-500'>
                                        로딩 중...
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
