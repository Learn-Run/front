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
    detailCategoryId,
}: CategorySearchParams) {
    const category = mainCategoryId || 'all';
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
            <Accordion
                type='single'
                collapsible
                defaultValue={mainCategoryId?.toString()}
            >
                {mainCategories.map((item) => (
                    <AccordionItem key={item.id} value={String(item.id)}>
                        <div className='flex flex-col'>
                            <Link
                                href={`/post?mainCategoryId=${item.id}`}
                                className={cn(
                                    'block w-full text-left px-2',
                                    item.id.toString() === category
                                        ? 'text-primary-100 font-bold'
                                        : '',
                                )}
                                scroll={false}
                            >
                                <AccordionTrigger>{item.name}</AccordionTrigger>
                            </Link>
                        </div>

                        <SubCategoryItem
                            mainCategoryId={item.id}
                            detailCategoryId={detailCategoryId}
                            subCategoryitem={item}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
        </nav>
    );
}
