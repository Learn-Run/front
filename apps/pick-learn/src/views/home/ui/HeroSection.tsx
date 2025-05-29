import Heading from '@/widgets/home/ui/Heading';
import React from 'react';

export default function HeroSection() {
    return (
        <section className='w-full min-h-screen flex items-center justify-center bg-primary-100/10'>
            <Heading align='center'>
                <Heading.Title>
                    내가 찾는 답은 여기에
                    <br /> PICK & LEARN
                </Heading.Title>
                <Heading.SubTitle>
                    궁금한 점이 생기면 언제든지 질문하세요. <br />
                    다양한 사람들이 함께 답을 찾고 지식을 나누는 열린 커뮤니티
                    입니다.
                </Heading.SubTitle>
            </Heading>
        </section>
    );
}
