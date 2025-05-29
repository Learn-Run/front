import StepCard from '@/widgets/home/ui/StepCard';
import { stepList } from '../model/constants';
import Heading from '@/widgets/home/ui/Heading';
import { Tag } from '@/shared/ui';
import { Button } from '@repo/ui/components/base/Button';

export default function StepSection() {
    return (
        <section className='grid grid-cols-1 grid-rows-2 md:grid-cols-12 md:grid-rows-1 gap-y-10 '>
            <Heading className='col-span-1 md:col-span-4 md:row-span-1 space-y-1 order-1 md:order-none'>
                <Tag>How it Work</Tag>
                <Heading.Title>
                    Step-by-Step <br /> Guide to Asking <br />
                    the Perfect <br /> Question
                </Heading.Title>
                <Button variant='default' className='w-fit py-4 px-8 mt-10'>
                    지금 바로 질문해보기
                </Button>
            </Heading>

            <ul className='col-span-1 md:col-span-6 md:col-start-7 order-2 md:order-none flex gap-6'>
                {stepList.map(({ icon: Icon, ...item }) => (
                    <StepCard key={item.id}>
                        <StepCard.Icon>
                            <Icon />
                        </StepCard.Icon>
                        <StepCard.Contents
                            number={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    </StepCard>
                ))}
            </ul>
        </section>
    );
}
