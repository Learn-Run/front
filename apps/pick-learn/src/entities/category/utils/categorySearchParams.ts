export function categorySearchParams(
    mainCategoryId: number,
    subCategoryId: number,
    categoryListId: number,
    sort: string,
) {
    const searchParams = new URLSearchParams();

    if (mainCategoryId)
        searchParams.set('mainCategoryId', mainCategoryId.toString());

    if (subCategoryId)
        searchParams.set('subCategoryId', subCategoryId.toString());

    if (categoryListId)
        searchParams.set('categoryListId', categoryListId.toString());

    if (sort) searchParams.set('sort', sort);

    return searchParams.toString();
}
