'use server';

import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';

export const getVideoToken = async (sessionId: string) => {
    const { result } = await fetchData.post<{ sessionToken: string }>(
        `${services.chat}/api/v1/token`,
        {
            body: JSON.stringify({ sessionId }),
            requireAuth: true,
        },
    );

    return result.sessionToken;
};

export const getToken = async (sessionId: string) => {
    await fetch('http://localhost:4443/api/sessions', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:MY_SECRET'),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customSessionId: sessionId }),
    });

    const tokenRes = await fetch('http://localhost:4443/api/tokens', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + btoa('OPENVIDUAPP:MY_SECRET'),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session: sessionId }),
    });

    const { token } = await tokenRes.json();

    return token;
};
