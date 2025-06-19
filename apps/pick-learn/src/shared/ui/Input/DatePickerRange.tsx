'use client';

import { useEffect, useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { ChevronDown, X } from 'lucide-react';

import { koreanMonths, koreanWeekDays } from '@/constants';

export const DatePickerRange = ({
    startDate,
    endDate,
    onChangeRange,
    placeholder = ['시작일', '종료일'],
    isIcon = true,
    className = '',
    isClearable = false,
    readOnlyEndDate = false,
    calculateEndDate,
}: {
    startDate: string;
    endDate: string;
    onChangeRange?: (range: [string, string]) => void;
    placeholder?: string[];
    isIcon?: boolean;
    className?: string;
    isClearable?: boolean;
    readOnlyEndDate?: boolean;
    calculateEndDate?: (start: string) => Promise<string>; // 종료일 자동 계산 함수
}) => {
    const [internalRange, setInternalRange] = useState<
        [Date | null, Date | null]
    >([
        startDate ? new Date(startDate) : null,
        endDate ? new Date(endDate) : null,
    ]);

    const handleClear = () => {
        setInternalRange([null, null]);
        onChangeRange?.(['', '']);
    };

    const handleRangeChange = async (val: DateObject[]) => {
        if (!val?.[0]) return;

        const start = val[0].format('YYYY-MM-DD');
        const end = calculateEndDate ? await calculateEndDate(start) : start;

        setInternalRange([val[0].toDate(), new Date(end)]);
        onChangeRange?.([start, end]);
    };

    // 외부 상태 동기화
    useEffect(() => {
        if (readOnlyEndDate) {
            setInternalRange((prev) => [
                prev[0],
                endDate ? new Date(endDate) : null,
            ]);
        }
    }, [endDate, readOnlyEndDate]);

    return (
        <DatePicker
            value={internalRange}
            onChange={(val) => {
                if (!val || val.length === 0) return;

                if (readOnlyEndDate) {
                    handleRangeChange(val);
                    // 종료일 클릭 무시
                    return;
                }

                // 기본 range 동작
                const range: [Date, Date] = [
                    val[0]?.toDate(),
                    val[1]?.toDate(),
                ];
                setInternalRange(range);
                const formatted = val.map((d) => d.format('YYYY-MM-DD')) as [
                    string,
                    string,
                ];
                onChangeRange?.(formatted);
            }}
            range
            format='YYYY-MM-DD'
            numberOfMonths={2}
            className='custom-brand'
            containerClassName={`shrink-0 ${className}`}
            months={koreanMonths}
            weekDays={koreanWeekDays}
            render={(value, openCalendar) => {
                return (
                    <div
                        onClick={openCalendar}
                        className='w-full bg-brand/5 border border-brand h-[3rem] rounded-md flex items-center justify-between cursor-pointer px-4 w-full shrink-0'
                    >
                        <span className='font-bold text-brand'>
                            {startDate || placeholder[0]} -{' '}
                            {endDate || placeholder[1]}
                        </span>
                        {isIcon && (
                            <ChevronDown size={20} className='text-brand' />
                        )}

                        {isClearable && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClear();
                                }}
                                type='button'
                            >
                                <X
                                    size={18}
                                    className='ml-2 text-gray-400 hover:text-brand'
                                />
                            </button>
                        )}
                    </div>
                );
            }}
        />
    );
};
