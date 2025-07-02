'use client';
import DatePicker from '@/shared/ui/DatePicker';

interface PaymentHistoryFilterProps {
    startDate: Date | undefined;
    setStartDate: (date: Date | undefined) => void;
    endDate: Date | undefined;
    setEndDate: (date: Date | undefined) => void;
    onSearch: () => void;
}

export default function PaymentHistoryFilter({
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    onSearch,
}: PaymentHistoryFilterProps) {
    return (
        <div className='px-4 pb-4'>
            <div className='flex items-center gap-4'>
                <div className='flex-1'>
                    <DatePicker
                        date={startDate}
                        setDate={setStartDate}
                        fromYear={2020}
                        toYear={2030}
                    />
                </div>
                <div className='flex-1'>
                    <DatePicker
                        date={endDate}
                        setDate={setEndDate}
                        fromYear={2020}
                        toYear={2030}
                    />
                </div>
                <div className='flex items-end'>
                    <button
                        onClick={onSearch}
                        className='px-4 py-3 bg-point-blue-200 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200'
                    >
                        조회
                    </button>
                </div>
            </div>
        </div>
    );
}
