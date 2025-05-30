import StepCard from '@/entities/guide/ui/StepCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@repo/ui/components/base/Carousel';
import { stepList } from '../model/constants';

export default function StepCarouselList() {
    return (
        <ul className='col-span-1 mx-auto md:hidden '>
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
