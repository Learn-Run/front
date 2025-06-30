export interface ChatRoomListType {
    content: ChatRoomListContentType[];
    hasNext: boolean;
    nextCursor: string;
}

export interface ChatRoomListContentType {
    chatRoomUuid: string;
    senderUuid: string;
    receiverUuid: string;
    lastMessage: string;
    lastMessageTime: string;
    unreadMessageCount: number;
}

export interface ChatRoomType {
    content: ChatRoomContentType[];
    hasNext: boolean;
    nextCursor: string;
}

export interface ChatRoomContentType {
    messageUuid: string;
    senderUuid: string;
    receiverUuid: string;
    content: string;
    sentAt: string;
    read: boolean;
}
