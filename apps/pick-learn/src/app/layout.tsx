import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import { dmSans } from '@/shared/assets/fonts';
import { ModalProvider } from '@/shared/model/modal/ModalContext';
import './globals.css';
import { BottomNavBar, Footer, Header } from '@/widgets/layout/ui';
import { options } from './api/auth/[...nextauth]/options';
import AuthContextProvider from '@/shared/ui/AuthContextProvider';

export const metadata: Metadata = {
    title: { default: 'Pick & Learn', template: '%s | Pick & Learn' },
    description:
        'Spharos Academy 6th 2차 프로젝트 - 실시간 지식 공유 플랫폼 Pick & Learn',
    keywords: [
        '지식공유',
        '실시간',
        'pickandlearn',
        'learn',
        '픽앤런',
        '질문',
        'qna',
        '답변',
        '스파로스',
        '스파로스아카데미',
    ],
    // icons: {
    //     icon: '/assets/images/icons/icon.png',
    // },
    openGraph: {
        title: 'Pick & Learn',
        description:
            'Spharos Academy 6th 2차 프로젝트 - 실시간 지식 공유 플랫폼 Pick & Learn',
        // url: 'https://pickandlearn.vercel.app/',
        siteName: 'Pick & Learn',
        // images: [
        //     {
        //         url: '/og-image.png',
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        locale: 'ko-KR',
        type: 'website',
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(options);
    const isAuth = !!session?.user as boolean;

    return (
        <html lang='ko-KR'>
            <body className={dmSans.className}>
                <AuthContextProvider isAuth={isAuth}>
                    <Header />
                    <ModalProvider>{children}</ModalProvider>
                    <Footer />
                    <BottomNavBar />
                </AuthContextProvider>
            </body>
        </html>
    );
}
