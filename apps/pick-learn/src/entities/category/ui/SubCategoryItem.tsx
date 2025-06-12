import Link from 'next/link';

import { AccordionContent } from '@repo/ui/components/base/Accordion';
import { CategoryProps } from '../api/types';

import { cn } from '@repo/ui/lib/utils';

type SubCategoryItemProps = Omit<CategoryProps, 'mainCategories'> & {
    mainCategories: number;
};

export default function SubCategoryItem({
    mainCategoryId,
    subCategoryId,
    mainCategories,
    categoryList,
}: SubCategoryItemProps) {
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

                {categoryList[mainCategories - 1]?.map((detailItem, index) => (
                    <li
                        key={index}
                        className={cn(
                            'font-medium text-gray-600 w-full mx-2 mb-2',
                            detailItem.subCategoryId === Number(detailCategory)
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        <Link
                            href={`/post?mainCategoryId=${mainCategories}&subCategoryId=${detailItem.subCategoryId}&categoryListId=${detailItem.id}`}
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
