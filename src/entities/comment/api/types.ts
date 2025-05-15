export interface RequestCommentType {
    postUuid: number;
    contents: string;
}
export interface ResponseCommentType {
    postUuid: number;
    commentUuid: number;
    memberUuid: number;
    contents: string;
    blindStatus: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface ResponseBlindCommentType {
    commentUuid: number;
    blindStatus: boolean;
}

// issue closses test
