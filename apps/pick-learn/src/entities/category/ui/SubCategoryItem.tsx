import Link from 'next/link';

import { AccordionContent } from '@repo/ui/components/base/Accordion';
import { CategorySearchParams } from '../api/types';
import { getSubCategoryListByMainCategoryId } from '../api';
import { cn } from '@repo/ui/lib/utils';

export default async function SubCategoryItem({
    mainCategoryId,
    subCategoryId,
    mainCategoryItem,
}: CategorySearchParams & { mainCategoryItem: number }) {
    if (!mainCategoryItem) return;

    const detailCategory = subCategoryId || '';
    const selectedSubCategories = await getSubCategoryListByMainCategoryId(
        Number(mainCategoryItem),
    );

    return (
        <AccordionContent>
            <ul className='w-full'>
                <li
                    className={cn(
                        'font-medium text-gray-600 w-full mx-2 mb-2',
                        Number(mainCategoryId) === mainCategoryItem &&
                            !subCategoryId
                            ? 'text-primary-100 font-bold'
                            : '',
                    )}
                >
                    <Link
                        href={`/post?mainCategoryId=${mainCategoryItem}`}
                        scroll={false}
                        replace
                    >
                        전체
                    </Link>
                </li>

                {selectedSubCategories?.map((detailItem) => (
                    <li
                        key={detailItem.id}
                        className={cn(
                            'font-medium text-gray-600 w-full mx-2 mb-2',
                            detailItem.subCategoryId === Number(detailCategory)
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        <Link
                            href={`/post?mainCategoryId=${mainCategoryId}&subCategoryId=${detailItem.subCategoryId}&categoryListId=${detailItem.id}`}
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
