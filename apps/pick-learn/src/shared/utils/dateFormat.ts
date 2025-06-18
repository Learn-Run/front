export function dateFormat(initDate: Date | string) {
    const date = new Date(initDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const datePad = date.getDate().toString().padStart(2, '0');

    return `${year} - ${month} - ${datePad}`;
}
