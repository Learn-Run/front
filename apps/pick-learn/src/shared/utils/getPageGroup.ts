export const getPageGroup = (
    currentPage: number,
    totalPage: number,
    groupSize: number,
) => {
    const currentGroup = Math.floor((currentPage - 1) / groupSize);

    const start = currentGroup * groupSize + 1;
    const end = Math.min(start + groupSize - 1, totalPage);

    const pages = [];

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
};
