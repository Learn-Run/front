import { cn } from '@repo/ui/lib/utils';
import { getMainCategories } from '../api';
import CategoryNameItem from './CategoryNameItem';
import Link from 'next/link';
import { Button } from '@repo/ui/components/base/Button';

export default async function AskAtCategoryList({
    mainCategoryId,
}: {
    mainCategoryId?: number;
}) {
    const categoryList = await getMainCategories();

    return (
        <ul className='flex items-center justify-center flex-wrap gap-x-4 2xl:max-w-[60%] mx-auto'>
            <li>
                <Button
                    variant='outline'
                    className={cn(
                        'inline-block text-center mx-2 text-sm font-medium text-gray-600 p-2.5 hover:bg-primary-100/10 transition-colors duration-200 ease-in-out rounded-sm',
                        !mainCategoryId
                            ? 'bg-primary-100 text-white font-bold hover:bg-primary-100'
                            : '',
                    )}
                >
                    <Link href={`/`} replace scroll={false}>
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
                        'inline-block text-center mx-2 text-sm font-medium text-gray-600',
                        Number(mainCategoryId) === item.id
                            ? 'bg-primary-100 text-white font-bold hover:bg-primary-100'
                            : '',
                    )}
                />
            ))}
        </ul>
    );
}
