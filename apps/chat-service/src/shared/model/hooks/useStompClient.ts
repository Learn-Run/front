'use client';
import { useRef } from 'react';
import { Client, IMessage } from '@stomp/stompjs';

type UseStompProps = {
    senderUuid: string;
    chatRoomUuid: string;
    onMessage: (message: IMessage) => void;
};

export const useStompClient = () => {
    const clientRef = useRef<Client | null>(null);

    const connect = ({
        senderUuid,
        chatRoomUuid,
        onMessage,
    }: UseStompProps) => {
        const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL;

        const client = new Client({
            brokerURL: `wss://${SOCKET_URL}/ws-chat`,
            connectHeaders: { 'X-Member-UUID': senderUuid },
            // debug: (str) => console.log('🟡 [STOMP]', str),
            onConnect: () => {
                const destination = `/queue/messages/${chatRoomUuid}`;
                console.log('📩 [SUBSCRIBING TO]', destination);

                client.subscribe(destination, onMessage);
            },
            onStompError: (frame) => {
                console.error('❌ STOMP error:', frame);
            },
        });

        client.activate();
        clientRef.current = client;
    };

    const sendMessage = (
        senderUuid: string,
        chatRoomUuid: string,
        content: string,
    ) => {
        const message = {
            senderUuid,
            chatRoomUuid,
            content,
            sendAt: Date.now(),
        };

        clientRef.current?.publish({
            destination: '/app/chat.sendMessage',
            headers: { 'X-Member-UUID': senderUuid },
            body: JSON.stringify(message),
        });
    };

    const disconnect = () => {
        clientRef.current?.deactivate();
    };

    return { connect, sendMessage, disconnect };
};
