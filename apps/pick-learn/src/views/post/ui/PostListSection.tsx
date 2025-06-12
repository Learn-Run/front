import { CategoryProps } from '@/entities/category/api/types';
import CategoryListItem from '@/entities/category/ui/CategoryListItem';
import CategoryMobileList from '@/entities/category/ui/CategoryMobileList';
import AskItemCardList from '@/views/home/ui/AskItemCardList';

export default async function PostListSection({
    mainCategoryId,
    subCategoryId,
    categoryList,
    mainCategories,
}: CategoryProps) {
    return (
        <section className='flex flex-col md:flex-row md:justify-between md:items-start container mx-auto m-5 gap-5 px-4 md:px-0 2xl:px-0'>
            <CategoryListItem
                mainCategoryId={mainCategoryId}
                subCategoryId={subCategoryId}
                categoryList={categoryList}
                mainCategories={mainCategories}
            />
            <CategoryMobileList
                mainCategoryId={mainCategoryId}
                subCategoryId={subCategoryId}
                categoryList={categoryList}
                mainCategories={mainCategories}
            />

            <AskItemCardList className='grid grid-cols-1 xl:grid-cols-3 sm:gird-cols-1' />
        </section>
    );
}
