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
        <ul className='absolute left-0 flex items-start justify-center '>
            {Number(mainCategoryId) === mainCategories && (
                <li
                    className={cn(
                        'inline-block text-sm font-medium text-gray-600',
                        !subCategoryId ? 'text-primary-100 font-bold' : '',
                    )}
                >
                    <Link
                        href={`/post?mainCategoryId=${mainCategories}`}
                        scroll={false}
                        replace
                        className='whitespace-nowrap block px-2'
                    >
                        전체
                    </Link>
                </li>
            )}
            {categoryList[mainCategories - 1]?.map((detailItem) => {
                if (detailItem.mainCategoryId !== Number(mainCategoryId))
                    return null;
                return (
                    <li
                        key={detailItem.subCategoryId}
                        className={cn(
                            'inline-block font-medium text-gray-600',
                            detailItem.subCategoryId === Number(subCategoryId)
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        <Link
                            href={`/post?mainCategoryId=${mainCategories}&subCategoryId=${detailItem.subCategoryId}`}
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
