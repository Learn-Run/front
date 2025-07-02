import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from '@repo/ui/components/base/Accordion';
import { CategoryItemProps } from '@/entities/category/api/types';
import PopularSubCategoryItem from './PopulaSubCategoryItem';

export default async function PopularCategoryListItem({
    searchParams,
    categoryList,
    mainCategories,
}: CategoryItemProps) {
    return (
        <nav
            className={cn(
                'bg-white shadow-md w-full max-w-[200px] h-full min-h-[388px] flex-col p-4 hidden md:flex',
            )}
        >
            <h3 className='text-xl font-bold mx-2 text-primary-100 mb-4'>
                카테고리
            </h3>
            <Link
                href={`${process.env.BASE_FRONT_URL}/popularPosts`}
                replace
                scroll={false}
                className={cn(
                    'text-sm w-full border-b py-4 hover:underline font-medium',
                    !searchParams.mainCategoryId
                        ? 'text-primary-100 font-bold'
                        : '',
                )}
            >
                전체
            </Link>
            <Accordion
                type='single'
                collapsible
                defaultValue={searchParams.mainCategoryId?.toString()}
            >
                {mainCategories.map((item) => (
                    <AccordionItem key={item.id} value={String(item.id)}>
                        <AccordionTrigger className='cursor-pointer'>
                            {item.name}
                        </AccordionTrigger>

                        <PopularSubCategoryItem
                            searchParams={searchParams}
                            mainCategories={item.id}
                            categoryList={categoryList}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    );
}
