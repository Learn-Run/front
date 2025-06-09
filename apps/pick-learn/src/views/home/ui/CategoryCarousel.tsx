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
                                    <Link
                                        href={`/post?category=${cat.id}`}
                                        className='flex flex-col items-center space-y-2'
                                    >
                                        {Icon ? (
                                            <Icon className='w-full h-full max-w-[100px] max-h-[100px]' />
                                        ) : (
                                            <div className='w-full h-full bg-gray-200' />
                                        )}

                                        <span className='text-sm text-gray-700 text-center'>
                                            {cat.name}
                                        </span>
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
