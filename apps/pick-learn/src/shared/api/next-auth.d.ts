import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            accessToken: string;
            memberUuid: string;
        } & DefaultSession['user'];
    }

    interface User extends DefaultUser {
        accessToken: string;
        memberUuid: string;
    }
}
