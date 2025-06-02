export interface MainCategoryType {
    id: number;
    name: string;
}

export interface SubCategoryType {
    id: number;
    mainCategoryId: number;
    name: string;
}
