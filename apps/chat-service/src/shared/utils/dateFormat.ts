import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ko';

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(timezone);
dayjs.locale('ko');

const KST = 'Asia/Seoul';

export const formatRelative = (date: string | Date | number) => {
    return dayjs(date).tz(KST).fromNow();
};

export const formatSmartDate = (date: string | Date | number): string => {
    const now = dayjs().tz(KST);
    const target = dayjs(date).tz(KST);

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
    return dayjs(date).tz(KST).format(formatStr);
};

function formatDateLong(initDate: Date | string): string {
    return dayjs(initDate).tz(KST).format('MMMM Do, YYYY | HH:mm');
}

function formatDateYMD(initDate: Date | string): string {
    return dayjs(initDate).tz(KST).format('YYYY-MM-DD');
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
