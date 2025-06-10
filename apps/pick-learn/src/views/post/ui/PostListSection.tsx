import { CategorySearchParams } from '@/entities/category/api/types';
import CategoryListItem from '@/entities/category/ui/CategoryListItem';
import AskItemCardList from '@/views/home/ui/AskItemCardList';

export default async function PostListSection({
    mainCategoryId,
    subCategoryId,
}: CategorySearchParams) {
    return (
        <section className='flex items-start justify-between container mx-auto m-20 gap-5 px-4 2xl:px-0'>
            <CategoryListItem
                mainCategoryId={mainCategoryId}
                subCategoryId={subCategoryId}
            />
            <AskItemCardList className='grid grid-cols-1 xl:grid-cols-3 sm:gird-cols-1' />
        </section>
    );
}
