import { cn } from '@repo/ui/lib/utils';
import { getMainCategories } from '../api';
import CategoryNameItem from './CategoryNameItem';

export default async function AskAtCategoryList({
    category,
}: {
    category?: string;
}) {
    const categoryList = await getMainCategories();
    const categoryAll = [{ id: 0, name: '전체' }, ...categoryList];

    return (
        <ul className='flex items-center justify-center flex-wrap gap-4 2xl:max-w-[60%] mx-auto'>
            {categoryAll.map((item) => (
                <CategoryNameItem
                    key={item.id}
                    text={item.name}
                    className={cn(
                        'inline-block text-center mx-2 text-sm font-medium text-gray-600',
                        category === item.name ||
                            (item.name === '전체' && !category)
                            ? 'bg-primary-100 text-white font-bold hover:bg-primary-100'
                            : '',
                    )}
                />
            ))}
        </ul>
    );
}
