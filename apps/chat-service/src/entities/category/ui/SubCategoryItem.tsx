'use client';
import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { SubCategoryItemProps } from '../api/types';
import { AccordionContent } from '@repo/ui/components/base/Accordion';
import { categorySearchParams } from '../utils/categorySearchParams';

export default function SubCategoryItem({
    searchParams,
    categoryList,
    mainCategories,
}: SubCategoryItemProps) {
    if (!mainCategories) return;

    const detailCategory = searchParams.subCategoryId || '';

    return (
        <AccordionContent>
            <ul className='w-full'>
                <li
                    className={cn(
                        'font-medium text-gray-600 w-full mx-2 mb-2',
                        Number(searchParams.mainCategoryId) ===
                            mainCategories && !searchParams.subCategoryId
                            ? 'text-primary-100 font-bold'
                            : '',
                    )}
                >
                    <Link
                        href={`${process.env.BASE_FRONT_URL}/post?mainCategoryId=${mainCategories}`}
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
                            href={`${process.env.BASE_FRONT_URL}/post?${categorySearchParams(
                                {
                                    mainCategoryId: mainCategories,
                                    subCategoryId: detailItem.subCategoryId,
                                    sort: searchParams.sort,
                                },
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
