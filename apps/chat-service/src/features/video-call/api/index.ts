'use server';
import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getMemberProfile } from '@/entities/profile/api';

export const getVideoToken = async (sessionId: string) => {
    const memberUuid = (await getServerSession(options))?.user.memberUuid;

    if (!memberUuid) return;

    const profile = await getMemberProfile(memberUuid);

    if (!profile) return;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_LIVEKIT_TOKEN_URL}/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Member-UUID': memberUuid,
            },
            body: JSON.stringify({
                chatRoomUuid: sessionId,
                nickname: profile.nickname,
            }),
        },
    );

    const { token } = await res.json();

    return token;
};
