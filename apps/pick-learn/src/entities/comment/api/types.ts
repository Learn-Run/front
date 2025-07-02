export interface CommentListType {
    comments: {
        commentUuid: string;
        postUuid: string;
        memberUuid: string;
        content: string;
        blind_status: boolean;
        deleted_status: boolean;
        updatedAt: string;
    }[];
    page: number;
    size: number;
    hasNext: boolean;
    totalPages: number;
    totalElements: number;
}

export interface CommentType {
    commentUuid: string;
    postUuid: string;
    memberUuid: string;
    content: string;
    blind_status: boolean;
    deleted_status: boolean;
    updatedAt: string;
}

export interface CommentLikeCountType {
    commentUuid: string;
    likeCount: number;
}

export interface CommentLikeStatusType {
    commentUuid: string;
    liked: boolean;
}
