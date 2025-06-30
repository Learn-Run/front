import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

import { fetchData } from '@/shared/api/instance';
import { routes } from '@/shared/model/constants/routes';
import { services } from '@/shared/api/constants';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                loginId: { label: 'loginId', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials): Promise<User | null> {
                if (!credentials?.loginId || !credentials?.password) {
                    return null;
                }

                try {
                    const { result } = await fetchData.post<User>(
                        `${services.member}/api/v1/auth/sign-in`,
                        {
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                loginId: credentials.loginId,
                                password: credentials.password,
                            }),
                        },
                    );

                    return result;
                } catch (error) {
                    console.error('Error during sign-in:', error);
                    return null;
                }
            },
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID || '',
            clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (profile && account) {
                try {
                    const res = await fetchData.post<User>(
                        `${services.member}/api/v1/oauth/sign-in`,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                provider: account.provider.toUpperCase(),
                                providerAccountId: account.providerAccountId,
                            }),
                            cache: 'no-cache',
                        },
                    );

                    if (!res.isSuccess) {
                        return (
                            routes.signUp +
                            `?provider=${account.provider}&providerId=${account.providerAccountId}`
                        );
                    }

                    user.accessToken = res.result.accessToken;
                    user.memberUuid = res.result.memberUuid;

                    return true;
                } catch (error) {
                    console.error('error', error);
                    return `/chat?error=${error}`;
                }
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.memberUuid = user.memberUuid;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                ...session.user,
                accessToken: token.accessToken,
                memberUuid: token.memberUuid,
            };
            return session;
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },
    pages: {
        signIn: routes.signIn,
    },
};
