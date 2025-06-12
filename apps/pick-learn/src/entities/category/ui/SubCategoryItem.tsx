'use client';
import Link from 'next/link';

import { AccordionContent } from '@repo/ui/components/base/Accordion';
import { CategoryProps } from '../api/types';

import { cn } from '@repo/ui/lib/utils';
import { categorySearchParams } from '../utils/categorySearchParams';
import { useSearchParams } from 'next/navigation';

type SubCategoryItemProps = Omit<CategoryProps, 'mainCategories'> & {
    mainCategories: number;
};

export default function SubCategoryItem({
    mainCategories,
    categoryList,
}: SubCategoryItemProps) {
    const searchParams = useSearchParams();
    const mainCategoryId = searchParams.get('mainCategoryId');
    const subCategoryId = searchParams.get('subCategoryId');
    const sort = searchParams.get('sort') || 'recent';

    if (!mainCategories) return;

    const detailCategory = subCategoryId || '';

    return (
        <AccordionContent>
            <ul className='w-full'>
                <li
                    className={cn(
                        'font-medium text-gray-600 w-full mx-2 mb-2',
                        Number(mainCategoryId) === mainCategories &&
                            !subCategoryId
                            ? 'text-primary-100 font-bold'
                            : '',
                    )}
                >
                    <Link
                        href={`/post?mainCategoryId=${mainCategories}`}
                        scroll={false}
                        replace
                    >
                        전체
                    </Link>
                </li>

                {categoryList[mainCategories - 1]?.map((detailItem) => (
                    <li
                        key={detailItem.subCategoryId}
                        className={cn(
                            'font-medium text-gray-600 w-full mx-2 mb-2',
                            detailItem.subCategoryId === Number(detailCategory)
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        <Link
                            href={`/post?${categorySearchParams(
                                Number(mainCategoryId),
                                detailItem.subCategoryId,
                                detailItem.id,
                                sort,
                            )}`}
                            scroll={false}
                            replace={true}
                            className='block w-full text-left'
                        >
                            {detailItem.subCategoryName}
                        </Link>
                    </li>
                ))}
            </ul>
        </AccordionContent>
    );
}
