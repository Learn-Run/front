import Link from 'next/link';

import { AccordionContent } from '@repo/ui/components/base/Accordion';
import { CategorySearchParams, MainCategoryType } from '../api/types';
import { getSubCategories } from '../api';
import { cn } from '@repo/ui/lib/utils';

export default async function SubCategoryItem({
    mainCategoryId,
    detailCategoryId,
    subCategoryitem,
}: CategorySearchParams & { subCategoryitem: MainCategoryType }) {
    const detailCategory = detailCategoryId || '';
    const selectedSubCategories = mainCategoryId
        ? await getSubCategories(Number(mainCategoryId))
        : [];
    const categoryAll = [{ id: 0, name: '전체' }, ...selectedSubCategories];
    return (
        <AccordionContent>
            <ul className='w-full'>
                {(subCategoryitem.id.toString() === mainCategoryId?.toString()
                    ? categoryAll
                    : []
                )?.map((detailItem) => (
                    <li
                        key={detailItem.id}
                        className={cn(
                            'font-medium text-gray-600 w-full mx-2 mb-2',
                            detailItem.id.toString() === detailCategory
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        <Link
                            href={`/post?mainCategoryId=${subCategoryitem.id}&detailCategoryId=${detailItem.id}`}
                            className='block w-full text-left'
                            scroll={false}
                        >
                            {detailItem.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </AccordionContent>
    );
}
