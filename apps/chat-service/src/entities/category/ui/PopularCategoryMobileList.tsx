import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { CategoryItemProps } from '../api/types';
import PopularSubCategoryMobileList from './PopularSubCategoryMobileList';

export default function PopularCategoryMobileList({
    searchParams,
    categoryList,
    mainCategories,
}: CategoryItemProps) {
    return (
        <nav className={cn('sticky md:static py-5 md:hidden')}>
            <ul className='flex justify-center items-center w-full gap-x-3 relative'>
                <li>
                    <Link
                        href={`${process.env.BASE_FRONT_URL}/popularPosts`}
                        replace
                        scroll={false}
                        className={cn(
                            ' w-full font-medium',
                            !searchParams.mainCategoryId
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        전체
                    </Link>
                </li>
                {mainCategories.map((item) => (
                    <li key={item.id}>
                        <div>
                            <Link
                                href={`${process.env.BASE_FRONT_URL}/popularPosts?mainCategoryId=${item.id}`}
                                replace
                                scroll={false}
                                className={cn(
                                    'font-medium',
                                    Number(searchParams.mainCategoryId) ===
                                        item.id
                                        ? 'text-primary-100 font-bold'
                                        : '',
                                )}
                            >
                                {item.name}
                            </Link>
                        </div>

                        <PopularSubCategoryMobileList
                            searchParams={searchParams}
                            categoryList={categoryList}
                            mainCategories={item.id}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
