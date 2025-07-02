import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ko';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale('ko');

const KST = 'Asia/Seoul';

const convertToKST = (date: string | Date | number) => {
    return dayjs.utc(date).tz(KST);
};

export const formatRelative = (date: string | Date | number) => {
    return convertToKST(date).fromNow();
};

export const formatSmartDate = (date: string | Date | number): string => {
    const now = dayjs().tz(KST);
    const target = convertToKST(date);

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
    return convertToKST(date).format(formatStr);
};

function formatDateLong(initDate: Date | string): string {
    return convertToKST(initDate).format('MMMM Do, YYYY | HH:mm');
}

function formatDateYMD(initDate: Date | string): string {
    return convertToKST(initDate).format('YYYY-MM-DD');
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
