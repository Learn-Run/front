import { NextAuthOptions, type User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

import { CommonResponse } from '@/shared/api/types';
import { SignInResponseType } from '@/features/auth/api/types';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                account: { label: 'account', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials): Promise<User | null> {
                if (!credentials?.account || !credentials?.password) {
                    return null;
                }

                try {
                    // FIXME: 로그인 API URI 수정 필요
                    const response = await fetch(
                        `${process.env.BASE_API_URL}/api/v1/auth/sign-in`,
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                account: credentials.account,
                                password: credentials.password,
                            }),
                        },
                    );

                    const { result } =
                        (await response.json()) as CommonResponse<SignInResponseType>;

                    return result as User;
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
        async signIn({
            user,
            account,
            profile,
            email,
            credentials: _credentials,
        }) {
            if (profile && account) {
                try {
                    // FIXME: kakao provider 연결하는 API URI 및 body 수정 필요
                    const res = await fetch(
                        `${process.env.BASE_API_URL}/api/v1/auth/oauth-sign-in`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                provider: account.provider,
                                providerId: account.providerAccountId,
                                providerEmail: email,
                            }),
                            cache: 'no-cache',
                        },
                    );
                    const data =
                        (await res.json()) as CommonResponse<SignInResponseType>;
                    user.accessToken = data.result.accessToken;
                    user.memberUuid = data.result.memberUuid;
                    return true;
                } catch (error) {
                    console.error('error', error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                ...session.user,
                accessToken: token.accessToken,
                name: token.name,
                memberUuid: token.memberUuid,
            };
            return session;
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
    },
    pages: {
        signIn: '/',
        error: '/auth/error',
    },
};
