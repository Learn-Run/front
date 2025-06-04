import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';
import Heading from '@/widgets/home/ui/Heading';

export default function HeroSection() {
    return (
        <section className='w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-secondary-100 to-[#f7f2f3]'>
            <Heading align='center'>
                <Heading.Title>PICK & LEARN</Heading.Title>
                <Heading.SubTitle>
                    궁금한 점이 생기면 언제든지 질문하세요. <br />
                    다양한 사람들이 함께 답을 찾고 지식을 나누는 열린 커뮤니티
                    입니다.
                </Heading.SubTitle>
            </Heading>
            <Button
                className='max-w-[176px] font-semibold text-xl mt-10 min-h-[60px]'
                asChild
            >
                <Link href='/post'>Get Started</Link>
            </Button>
        </section>
    );
}
