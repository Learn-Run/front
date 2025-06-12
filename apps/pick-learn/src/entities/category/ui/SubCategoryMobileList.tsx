import Link from 'next/link';

import { CategoryProps } from '../api/types';
import { cn } from '@repo/ui/lib/utils';
type SubCategoryItemProps = Omit<CategoryProps, 'mainCategories'> & {
    mainCategories: number;
};

export default function SubCategoryMobileList({
    categoryList,
    mainCategoryId,
    subCategoryId,
    mainCategories,
}: SubCategoryItemProps) {
    return (
        <ul className='absolute left-0 flex items-start justify-start overflow-x-auto'>
            {categoryList[mainCategories - 1]?.map((detailItem, index) => {
                if (detailItem.mainCategoryId !== Number(mainCategoryId))
                    return;

                return (
                    <li
                        key={index}
                        className={cn(
                            'inline-block font-medium text-gray-600',
                            detailItem.subCategoryId === Number(subCategoryId)
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        <Link
                            href={`/post?mainCategoryId=${mainCategories}&subCategoryId=${detailItem.subCategoryId}&categoryListId=${detailItem.id}`}
                            scroll={false}
                            replace={true}
                            className='whitespace-nowrap block px-2'
                        >
                            {detailItem.subCategoryName}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
