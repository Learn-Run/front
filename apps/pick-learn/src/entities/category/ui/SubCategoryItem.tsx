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
    const detailCategory = subCategoryId || '';
    console.log('detailCategory', detailCategory);
    const selectedSubCategories = mainCategoryId
        ? await getSubCategoryListByMainCategoryId(Number(mainCategoryId))
        : [];

    return (
        <AccordionContent>
            <ul className='w-full'>
                <Link
                    href={`/post?mainCategoryId=${mainCategoryId}`}
                    scroll={false}
                    replace
                    className={cn(
                        'font-medium text-gray-600 w-full mx-2 mb-2',
                        !subCategoryId ? 'text-primary-100 font-bold' : '',
                    )}
                >
                    전체
                </Link>

                {(mainCategoryItem.toString() === mainCategoryId?.toString()
                    ? selectedSubCategories
                    : []
                )?.map((detailItem) => (
                    <li
                        key={detailItem.id}
                        className={cn(
                            'font-medium text-gray-600 w-full mx-2 mb-2',
                            detailItem.subCategoryId.toString() ===
                                detailCategory.toString()
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
