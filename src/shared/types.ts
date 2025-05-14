export type FileType = {
    type: string;
    contents: string;
};

export interface CommonResponse<T> {
    httpStatus: string;
    isSuccess: boolean;
    message: string;
    code: number;
    result: T;
}
