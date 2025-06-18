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

export type SubCategoryItemProps = {
    searchParams: {
        mainCategoryId?: number;
        subCategoryId?: number;
        categoryListId?: number;
        sort?: string;
    };
    categoryList: CategoryListType[][];
    mainCategories: number;
};

export type CategoryItemProps = {
    searchParams: {
        mainCategoryId: number;
        subCategoryId: number;
        sort?: string;
    };
    categoryList: CategoryListType[][];
    mainCategories: MainCategoryType[];
};
