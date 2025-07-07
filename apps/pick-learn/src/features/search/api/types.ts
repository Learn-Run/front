export interface SearchPostType {
    posts: {
        postUuid: string;
        memberUuid: string;
        mainCategoryId: number;
        subCategoryId: number;
        title: string;
        contents: string;
        blindStatus: boolean;
        deletedStatus: boolean;
    }[];
    page: number;
    size: number;
    hasNext: boolean;
    totalElements: number;
    totalPages: number;
}
