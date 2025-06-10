import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from '@repo/ui/components/base/Accordion';
import { getMainCategories } from '@/entities/category/api';
import { CategorySearchParams } from '@/entities/category/api/types';
import SubCategoryItem from './SubCategoryItem';

export default async function CategoryListItem({
    mainCategoryId,
    subCategoryId,
}: CategorySearchParams) {
    const mainCategories = await getMainCategories();

    return (
        <nav
            className={cn(
                'bg-white shadow-md w-full max-w-[200px] h-full min-h-[388px] flex flex-col p-4',
            )}
        >
            <h3 className='text-xl font-bold mx-2 text-primary-100 mb-4'>
                카테고리
            </h3>
            <Link
                href={`/post`}
                replace
                scroll={false}
                className={cn(
                    'text-sm w-full border-b py-4 hover:underline font-medium',
                    !mainCategoryId ? 'text-primary-100 font-bold' : '',
                )}
            >
                전체
            </Link>
            <Accordion
                type='single'
                collapsible
                defaultValue={mainCategoryId?.toString()}
            >
                {mainCategories.map((item) => (
                    <AccordionItem key={item.id} value={String(item.id)}>
                        <AccordionTrigger className='cursor-pointer'>
                            {item.name}
                        </AccordionTrigger>

                        <SubCategoryItem
                            mainCategoryId={item.id}
                            subCategoryId={subCategoryId}
                            mainCategoryItem={item.id}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    );
}
