export interface RequestCommentType {
    postUuid: number;
    contents: string;
    blindStatus: boolean;
}
export interface ResponseCommentType {
    commentUuid: number;
    postUuid: number;
    contents: string;
    blindStatus: boolean;
    createdAt: string;
    updatedAt: string;
}
