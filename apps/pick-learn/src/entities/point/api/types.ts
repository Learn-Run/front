export type PointListType = {
    point: number;
    bonusPoint: number;
    totalPoint: number;
    paymentAmount: number;
};

export interface PointHistoryType {
    content: PointHistoryContentType[];
    nextCursor: string;
    prevCursor: string;
    hasNext: boolean;
    hasPrevious: boolean;
    size: number;
    page: number;
    totalPages: number;
}

export type PointHistoryContentType = {
    memberPointUuid: number;
    delta: number;
    point: number;
    type: string;
    createdAt: string;
};
