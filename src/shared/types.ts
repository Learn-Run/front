export type FileType = {
    type: string;
    contents: string;
};

export type CommonResponse<T> = {
    httpStatus: string;
    isSuccess: boolean;
    message: string;
    code: number;
    result: T;
};
