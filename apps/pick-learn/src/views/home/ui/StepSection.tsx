import StepCard from '@/widgets/home/ui/StepCard';
import { stepList } from '../model/constants';
import Heading from '@/widgets/home/ui/Heading';
import { Tag } from '@/shared/ui';
import { Button } from '@repo/ui/components/base/Button';

export default function StepSection() {
    return (
        <section className='w-full py-[5rem] bg-gray-100'>
            <div className='grid grid-cols-1 lg:grid-cols-12 container mx-auto px-4 md:px-0 justify-center lg:justify-start gap-10 lg:gap-20'>
                <Heading className='col-span-1 lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-start gap-2'>
                    <Tag>How it Work</Tag>
                    <Heading.Title className='w-[80%] md:w-[60%] lg:w-full text-center lg:text-left'>
                        Step-by-Step Guide to Asking the Perfect Question
                    </Heading.Title>
                    <Button variant='default' className='w-fit py-4 px-8 mt-10'>
                        지금 바로 질문해보기
                    </Button>
                </Heading>

                <ul className='col-span-1 lg:col-span-7 xl:col-span-8 flex gap-6 lg:justify-end'>
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
            </div>
        </section>
    );
}
