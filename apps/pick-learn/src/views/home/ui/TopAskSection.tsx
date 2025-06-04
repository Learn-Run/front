import AskAtCategoryList from '@/entities/category/ui/AskAtCategoryList';
import AskItemCardList from '@/views/home/ui/AskItemCardList';
import Heading from '@/widgets/home/ui/Heading';
import MotionSection from '@repo/ui/components/wrapper/MotionSection';
import TypingWrapper from '@repo/ui/components/wrapper/TypingWrapper';

export default function TopAskSection({ category }: { category?: string }) {
    return (
        <MotionSection className='min-h-screen space-y-10 my-25'>
            <Heading align='center'>
                <Heading.Title>
                    <TypingWrapper
                        text='Top ASK Openings, Just for You!'
                        className='text-4xl md:text-5xl lg:text-6xl'
                    />
                </Heading.Title>
                <Heading.SubTitle>
                    지금 가장 핫한 질문들을 모았습니다.
                </Heading.SubTitle>
            </Heading>
            <AskAtCategoryList category={category} />
            <AskItemCardList />
        </MotionSection>
    );
}
