export function dateFormat(initDate: Date | string) {
    const date = new Date(initDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const datePad = date.getDate().toString().padStart(2, '0');

    return `${year} - ${month} - ${datePad}`;
}

export function formatDateToKST(date: Date) {
    const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000); // UTC+9 (KST)
    const year = kstDate.getUTCFullYear();
    const month = String(kstDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(kstDate.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function formatDateToKSTWithTime(date: Date) {
    const kstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000); // UTC+9 (KST)
    const year = kstDate.getUTCFullYear();
    const month = String(kstDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(kstDate.getUTCDate()).padStart(2, '0');
    const hours = String(kstDate.getUTCHours()).padStart(2, '0');
    const minutes = String(kstDate.getUTCMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
