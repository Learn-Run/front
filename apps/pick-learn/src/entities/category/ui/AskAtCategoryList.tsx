import Link from 'next/link';

import { getMainCategories } from '../api';
import { Button } from '@repo/ui/components/base/Button';
import { routes } from '@/shared/model/constants/routes';
import { cn } from '@repo/ui/lib/utils';
import CategoryNameItem from './CategoryNameItem';

export default async function AskAtCategoryList({
    mainCategoryId,
}: {
    mainCategoryId?: number;
}) {
    const categoryList = await getMainCategories();

    return (
        <ul className='flex items-center justify-center flex-wrap gap-4 w-full px-5 2xl:max-w-[60%] mx-auto'>
            <li>
                <Button
                    variant='outline'
                    className={cn(
                        'inline-block text-center text-sm font-medium text-gray-600 p-2.5 hover:bg-primary-100/10 transition-colors duration-200 ease-in-out rounded-sm',
                        !mainCategoryId
                            ? 'bg-primary-100 text-white font-bold hover:bg-primary-100'
                            : '',
                    )}
                    asChild
                >
                    <Link href={routes.home} replace scroll={false}>
                        전체
                    </Link>
                </Button>
            </li>
            {categoryList.map((item) => (
                <CategoryNameItem
                    key={item.id}
                    mainCategoryId={item.id}
                    categoryName={item.name}
                    className={cn(
                        'inline-block text-center text-sm font-medium text-gray-600',
                        Number(mainCategoryId) === item.id
                            ? 'bg-primary-100 text-white font-bold hover:bg-primary-100'
                            : '',
                    )}
                />
            ))}
        </ul>
    );
}
