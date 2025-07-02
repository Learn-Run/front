export interface PaymentHistoryType {
    content: PaymentHistoryContentType[];
    nextCursor: string;
    prevCursor: string;
    hasNext: boolean;
    hasPrevious: boolean;
    size: number;
    page: number;
    totalPages: number;
}

export type PaymentHistoryContentType = {
    orderId: string;
    orderName: string;
    paymentKey: string;
    paymentMethod: string;
    paymentStatus: string;
    totalAmount: number;
    requestedAt: string;
    approvedAt: string;
};
