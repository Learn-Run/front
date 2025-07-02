interface CategorySearchParamsProps {
    mainCategoryId?: number;
    subCategoryId?: number;
    categoryListId?: number;
    sort?: string;
}

export function categorySearchParams(params: CategorySearchParamsProps) {
    const searchParams = new URLSearchParams();

    if (params.mainCategoryId) {
        searchParams.set('mainCategoryId', params.mainCategoryId.toString());
    }

    if (params.subCategoryId) {
        searchParams.set('subCategoryId', params.subCategoryId.toString());
    }

    if (params.categoryListId) {
        searchParams.set('categoryListId', params.categoryListId.toString());
    }

    if (params.sort) {
        searchParams.set('sort', params.sort);
    }

    return searchParams.toString();
}
