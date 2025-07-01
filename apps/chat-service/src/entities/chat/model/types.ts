export interface ChatType {
    chatId: string;
    chatRoomUuid: string;
    senderUuid: string;
    receiverUuid: string;
    content: string;
    sentAt: string;
    read: boolean;
}
