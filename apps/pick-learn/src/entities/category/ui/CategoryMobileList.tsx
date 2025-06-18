import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { CategoryListType, MainCategoryType } from '../api/types';
import SubCategoryMobileList from './SubCategoryMobileList';

type CategoryMobileListProps = {
    searchParams: {
        mainCategoryId: number;
        subCategoryId: number;
        categoryListId: number;
        sort?: string;
    };
    categoryList: CategoryListType[][];
    mainCategories: MainCategoryType[];
};

export default function CategoryMobileList({
    searchParams,
    categoryList,
    mainCategories,
}: CategoryMobileListProps) {
    return (
        <nav
            className={cn(
                'sticky container mx-auto md:static py-5 px-5 md:hidden',
            )}
        >
            <ul className='flex justify-center items-center w-full gap-x-4 relative'>
                {mainCategories.map((item) => (
                    <li key={item.id}>
                        <div>
                            <Link
                                href={`/post?mainCategoryId=${item.id}`}
                                replace
                                scroll={false}
                                className={cn(
                                    '',
                                    Number(searchParams.mainCategoryId) ===
                                        item.id
                                        ? 'text-primary-100 font-bold'
                                        : '',
                                )}
                            >
                                {item.name}
                            </Link>
                        </div>

                        <SubCategoryMobileList
                            categoryList={categoryList}
                            mainCategoryId={searchParams.mainCategoryId}
                            subCategoryId={searchParams.subCategoryId}
                            mainCategories={item.id}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
