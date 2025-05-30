import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { withAuthList } from '@/features/auth/model/constants';
import { routes } from '@/shared/constants/routes';

const authError = async (req: NextRequest) => {
    console.log('🚀 ~ authError ~ req:', req);
    // const url = req.nextUrl.clone();

    // url.search = ``;

    // return NextResponse.redirect(url);
};

const withAuth = async (req: NextRequest, token: boolean) => {
    const url = req.nextUrl.clone();
    const { pathname, searchParams } = req.nextUrl;

    if (!token) {
        // 이미 authRequired가 붙어 있으면 중복 rewrite 방지
        if (!searchParams.has('authRequired')) {
            url.searchParams.set('authRequired', 'true');
            url.searchParams.set('callbackUrl', pathname);
        }

        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
};

export default async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const accessToken = token?.accessToken;
    const { pathname } = req.nextUrl;

    const isWithAuth = withAuthList.includes(pathname);
    const isAuthError = routes.authError.includes(pathname);

    if (isWithAuth) return withAuth(req, !!accessToken);
    if (isAuthError) return authError(req);

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)'],
};
