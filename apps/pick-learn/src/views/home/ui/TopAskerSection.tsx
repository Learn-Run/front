import Heading from '@/widgets/home/ui/Heading';
import MotionSection from '@repo/ui/components/wrapper/MotionSection';
import TypingWrapper from '@repo/ui/components/wrapper/TypingWrapper';

import React from 'react';

export default function TopAskSection() {
    return (
        <MotionSection className='min-h-screen py-[10rem] space-y-10'>
            <Heading align='center'>
                <Heading.Title>
                    <TypingWrapper
                        text='Top ASK Openings, Just for You!'
                        className='text-4xl md:text-5xl lg:text-6xl'
                    />
                    Top ASK Openings, Just for You!
                </Heading.Title>
                <Heading.SubTitle>
                    지금 가장 핫한 질문들을 모았습니다.
                </Heading.SubTitle>
            </Heading>
        </MotionSection>
    );
}
