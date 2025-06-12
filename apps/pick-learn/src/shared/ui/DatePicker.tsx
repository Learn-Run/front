import { Button } from '@repo/ui/components/base/Button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@repo/ui/components/base/Popover';
import { cn } from '@repo/ui/lib/utils';
import { dateFormat } from '../utils/dateFormat';
import { IconCalendar } from '../assets/icons';
import { Calendar } from '@repo/ui/components/base/Calendar';

export default function DatePicker({
    date,
    setDate,
    fromYear = 1960,
    toYear = 2030,
}: {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    fromYear?: number;
    toYear?: number;
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    className={cn(
                        'w-full justify-between text-left font-normal border-gray-300 py-3',
                        !date && 'text-muted-foreground',
                    )}
                >
                    {date ? (
                        <span>{dateFormat(date)}</span>
                    ) : (
                        <span>Pick a date</span>
                    )}
                    <IconCalendar />
                </Button>
            </PopoverTrigger>
            <PopoverContent align='start' className=' w-auto p-0'>
                <Calendar
                    mode='single'
                    captionLayout='dropdown-buttons'
                    selected={date}
                    onSelect={setDate}
                    fromYear={fromYear}
                    toYear={toYear}
                />
            </PopoverContent>
        </Popover>
    );
}
