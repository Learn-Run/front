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
