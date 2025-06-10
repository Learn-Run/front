export interface MainCategoryType {
    id: number;
    name: string;
}

export interface SubCategoryType {
    id: number;
    name: string;
    color: string;
}

export interface CategoryListType {
    id: number;
    mainCategoryId: number;
    mainCategoryName: string;
    subCategoryId: number;
    subCategoryName: string;
    subCategoryColor: string;
}

export interface CategorySearchParams {
    mainCategoryId: number;
    detailCategoryId: number;
}
