import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';

import './globals.css';
import { dmSans } from '@/shared/assets/fonts';
import Header from '@/widgets/layout/ui/Header';
import { ModalProvider } from '@/shared/model/modal/ModalContext';
import { options } from './api/auth/[...nextauth]/options';
import AlertProvider from '@/shared/model/context/AlertProvider';

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
    icons: {
        icon: '/icon.png',
    },
    openGraph: {
        title: 'Pick & Learn',
        description:
            'Spharos Academy 6th 2차 프로젝트 - 실시간 지식 공유 플랫폼 Pick & Learn',
        url: 'https://pickandlearn.shop',
        siteName: 'Pick & Learn',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'ko-KR',
        type: 'website',
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(options);
    console.log('🚀 ~ session:', session);

    return (
        <html lang='ko-KR'>
            <body className={`${dmSans.className} antialiased`}>
                <div id='modal-root' />
                <ModalProvider>
                    <AlertProvider>
                        <div className='grid grid-rows-[auto_1fr] sm:grid-rows-1 sm:grid-cols-12 h-dvh w-full min-w-svw'>
                            <Header className='col-span-1 xl:col-span-2' />
                            <div className='row-span-1 sm:col-span-11 xl:col-span-10'>
                                {children}
                            </div>
                        </div>
                    </AlertProvider>
                </ModalProvider>
            </body>
        </html>
    );
}
