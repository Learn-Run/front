import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';
import { S3_BASE_URL } from '@/shared/model/constants';
import { videoUrlList } from '../model/constants';
import Heading from '@/widgets/home/ui/Heading';
import Video from '@repo/ui/components/base/Video';
import TypingWrapper from '@repo/ui/components/wrapper/TypingWrapper';

export default function HeroSection() {
    const randomIndex = Math.floor(Math.random() * videoUrlList.length);
    const videoUrl = S3_BASE_URL + videoUrlList[randomIndex];

    return (
        <section className='w-full min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden'>
            <Heading align='center' className='z-10'>
                <Heading.Title>
                    <TypingWrapper text='Pick & Learn' className='text-white' />
                </Heading.Title>
                <Heading.SubTitle className='text-white'>
                    궁금한 점이 생기면 언제든지 질문하세요. <br />
                    다양한 사람들이 함께 답을 찾고 지식을 나누는 열린 커뮤니티
                    입니다.
                </Heading.SubTitle>
            </Heading>
            <Button
                className='max-w-[176px] font-semibold text-xl mt-10 min-h-[60px] z-10'
                asChild
            >
                <Link href='/post'>Get Started</Link>
            </Button>
            <Video
                sourceSrc={videoUrl}
                className='absolute w-full h-full lg:h-[900px] xl:h-[1000px] z-[0] opacity-80 top-0 left-0 object-cover blur-[10px] pointer-events-none'
            />
        </section>
    );
}
