import StepCard from '@/widgets/home/ui/StepCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@repo/ui/components/base/Carousel';
import { stepList } from '../model/constants';

export default function StepCardCarousel() {
    return (
        <ul className='col-span-1 md:col-span-6 md:col-start-7 order-2 md:order-none mx-auto gap-6 max-w-[300px] md:hidden '>
            <Carousel className='w-full max-w-[250px]'>
                <CarouselContent>
                    {stepList.map(({ icon: Icon, ...item }) => (
                        <CarouselItem key={item.id}>
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
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </ul>
    );
}
