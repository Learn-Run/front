import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale('ko');

export const formatRelative = (date: string | Date | number) => {
    return dayjs(date).fromNow();
};

export const formatSmartDate = (date: string | Date | number): string => {
    const now = dayjs();
    const target = dayjs(date);

    const diffInDays = now.diff(target, 'day');

    if (diffInDays <= 3) {
        return target.fromNow();
    } else {
        return target.format('YYYY년 M월 D일');
    }
};

export const formatDate = (
    date: string | Date | number,
    formatStr = 'YYYY년 M월 D일',
) => {
    return dayjs(date).format(formatStr);
};

function formatDateLong(initDate: Date | string): string {
    const date = new Date(initDate);

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const pad = (n: number) => (n < 10 ? `0${n}` : n);

    return `${month} ${day}th, ${year} | ${hours}:${pad(minutes)} ${ampm}`;
}

function formatDateYMD(initDate: Date | string): string {
    const date = new Date(initDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export type DateFormatType = 'long' | 'ymd';

export function formatDateByType(
    initDate: Date | string,
    type: DateFormatType = 'long',
): string {
    if (type === 'ymd') {
        return formatDateYMD(initDate);
    }
    return formatDateLong(initDate);
}
