export interface RequestCommentType {
    postUuid: number;
    contents: string;
}
export interface ResponseCommentType {
    commentUuid: number;
    blindStatus: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ResponseBlindCommentType {
    commentUuid: number;
    blindStatus: boolean;
}
