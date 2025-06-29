import { S3_BASE_URL } from '@/shared/model/constants';
import { videoUrlList } from '../model/constants';
import Heading from '@/widgets/home/ui/Heading';
import Video from '@repo/ui/components/base/Video';
import TypingWrapper from '@repo/ui/components/wrapper/TypingWrapper';
import SearchButton from '@/features/search/ui/SearchButton';

export default function HeroSection() {
    const randomIndex = Math.floor(Math.random() * videoUrlList.length);
    const videoUrl = S3_BASE_URL + videoUrlList[randomIndex];

    return (
        <section className='w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden px-5 min-h-screen md:min-h-screen'>
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
            <SearchButton />
            <Video
                sourceSrc={videoUrl}
                className='absolute w-full h-full scale-105 z-[0] opacity-80 top-0 left-0 object-cover blur-[10px] pointer-events-none '
            />
        </section>
    );
}
