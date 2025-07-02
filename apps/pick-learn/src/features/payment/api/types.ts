export interface RequestPaymentType {
    orderName: string;
    point: number;
    bonusPoint: number;
    paymentAmount: number;
    paymentMethod: string;
}

export interface PaymentConfirmType {
    orderId: string;
    amount: number;
    paymentKey: string;
}
