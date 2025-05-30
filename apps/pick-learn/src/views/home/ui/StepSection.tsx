import { Tag } from '@/shared/ui';
import { Button } from '@repo/ui/components/base/Button';
import Heading from '@/widgets/home/ui/Heading';
import StepWrapper from '@/shared/ui/Wrapper/StepWrapper';
import StepCardList from '@/entities/guide/ui/StepCardList';
import StepCarouselList from '@/entities/guide/ui/StepCarouseList';

export default function StepSection() {
    return (
        <StepWrapper>
            <div className='grid grid-cols-1 lg:grid-cols-12 container mx-auto px-4 md:px-0 justify-center lg:justify-start gap-10 lg:gap-20'>
                <Heading className='col-span-1 lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start gap-2'>
                    <Tag>How it Work</Tag>
                    <Heading.Title className='w-[80%] text-3xl md:w-[60%] lg:w-full text-center lg:text-left'>
                        Step-by-Step Guide to Asking the Perfect Question
                    </Heading.Title>
                    <Button variant='default' className='w-fit py-4 px-8 mt-10'>
                        지금 바로 질문해보기
                    </Button>
                </Heading>

                <StepCardList />
                <StepCarouselList />
            </div>
        </StepWrapper>
    );
}
