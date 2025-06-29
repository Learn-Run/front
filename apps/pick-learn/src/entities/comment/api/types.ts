export interface CommentListType {
    comments: {
        commentUuid: string;
        postUuid: string;
        memberUuid: string;
        content: string;
        blind_status: boolean;
        deleted_status: boolean;
    }[];
    page: number;
    size: number;
    hasNext: boolean;
    totalPages: number;
    totalElements: number;
}
