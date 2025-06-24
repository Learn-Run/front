export interface MyActivePostListType {
    posts: {
        type: 'POST' | 'COMMENT' | 'REVIEW_RECEIVED' | 'REVIEW_WRITE';
        uuid: string;
    }[];
    page: number;
    size: number;
    hasNext: boolean;
    totalPages: number;
    totalElements: number;
}

export interface ActiveHistoryCountType {
    postCount: number;
    commentCount: number;
    reviewWriteCount: number;
    reviewReceivedCount: number;
    totalCount: number;
}
