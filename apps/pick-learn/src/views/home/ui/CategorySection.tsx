import Link from 'next/link';

import { getMainCategories } from '@/entities/category/api';
import CategoryCarousel from './CategoryCarousel';
import { iconMapById } from '../model/constants';

export default async function CategorySection() {
    const categories = await getMainCategories();

    return (
        <section className='container mx-auto max-w-[968px] mb-[50px]'>
            <h3 className='text-center text-primary-100 font-medium text-2xl mt-[50px] mb-8'>
                Categories
            </h3>
            <ul className='hidden md:grid grid-cols-6'>
                {categories.map((cat) => {
                    const Icon = iconMapById[cat.id];
                    return (
                        <li
                            key={cat.id}
                            className='col-span-1 justify-self-center'
                        >
                            <Link
                                href={`/post?category=${cat.name}`}
                                className='flex flex-col items-center space-y-2'
                            >
                                {Icon ? (
                                    <Icon className='w-full h-full' />
                                ) : (
                                    <div className='w-full h-full bg-gray-200' />
                                )}

                                <span className='text-sm text-gray-700 text-center'>
                                    {cat.name}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <CategoryCarousel categories={categories} />
        </section>
    );
}
