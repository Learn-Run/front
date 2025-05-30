import Heading from '@/widgets/home/ui/Heading';
import StepCardList from './StepCardList';
import { Button } from '@repo/ui/components/base/Button';
import { Tag } from '@/shared/ui';
import StepCardCarousel from './StepCardCarousel';

export default function StepSection() {
    return (
        <section className='grid grid-cols-1 grid-rows-2 md:grid-cols-12 md:grid-rows-1 gap-y-10 '>
            <Heading className='col-span-1 md:col-span-4 md:row-span-1 space-y-3 order-1 md:text-left md:order-none text-center '>
                <Tag>How it Work</Tag>
                <Heading.Title className='text-3xl md:text-5xl'>
                    Step-by-Step <br /> Guide to Asking <br />
                    the Perfect <br className='hidden md:block' /> Question
                </Heading.Title>
                <Button variant='default' className='w-fit py-4 px-8 mt-10'>
                    지금 바로 질문해보기
                </Button>
            </Heading>
            <StepCardList />
            <StepCardCarousel />
        </section>
    );
}
