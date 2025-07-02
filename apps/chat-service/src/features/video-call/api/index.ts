'use server';
import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';

export const getVideoToken = async (sessionId: string) => {
    const memberUuid = (await getServerSession(options))?.user.memberUuid;

    if (!memberUuid) return;

    const res = await fetch('http://ov.pickandlearn.shop:9999/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Member-UUID': memberUuid,
        },
        body: JSON.stringify({
            chatRoomUuid: sessionId,
        }),
    });

    const { token } = await res.json();

    return token;
};
