import Link from 'next/link';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@repo/ui/components/base/Carousel';
import { MainCategoryType } from '@/entities/category/api/types';
import { iconMapById } from '../model/constants';

export default function CategoryCarousel({
    categories,
}: {
    categories: MainCategoryType[];
}) {
    return (
        <ul className='flex items-center justify-center md:hidden'>
            <Carousel className='w-full max-w-[200px]'>
                <CarouselContent>
                    {categories.map((cat) => {
                        const Icon = iconMapById[cat.id];
                        return (
                            <CarouselItem key={cat.id}>
                                <li className='list-none  w-full max-w-[200px] flex flex-col items-center justify-center space-y-2'>
                                    {Icon ? (
                                        <Icon />
                                    ) : (
                                        <div className='w-full h-full bg-gray-200' />
                                    )}

                                    <Link
                                        href={`/post?category=${cat.name}`}
                                        className=''
                                    >
                                        <h3 className='font-medium text-lg'>
                                            {cat.name}
                                        </h3>
                                    </Link>
                                </li>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </ul>
    );
}
