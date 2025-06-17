export function dateFormat(initDate: Date | string): string {
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
