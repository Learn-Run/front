import type { Metadata } from 'next';

import './globals.css';
import { dmSans } from '@/shared/assets/fonts';
import Header from '@/widgets/layout/ui/Header';

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
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko-KR'>
            <body className={`${dmSans.className} antialiased`}>
                <div className='grid grid-rows-[auto_1fr] sm:grid-rows-1 sm:grid-cols-12 h-dvh w-full min-w-svw'>
                    <Header className='col-span-1 sm:col-span-4 md:col-span-3 lg:col-span-2' />
                    <div className='row-span-1 sm:col-span-8 md:col-span-9 lg:col-span-10'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
