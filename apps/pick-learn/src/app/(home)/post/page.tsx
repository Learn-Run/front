import { getCategoryList, getMainCategories } from '@/entities/category/api';
import { CategoryProps } from '@/entities/category/api/types';
import { MainWrapper } from '@/shared/ui';
import PostListSection from '@/views/post/ui/PostListSection';
import PostTopSection from '@/views/post/ui/PostTopSection';

export default async function page({
    searchParams,
}: {
    searchParams: Promise<CategoryProps>;
}) {
    const { mainCategoryId, subCategoryId } = await searchParams;
    const mainCategories = await getMainCategories();
    const categoryList = await Promise.all(
        mainCategories.map(async (mainCategory) => {
            return await getCategoryList(mainCategory.id);
        }),
    );

    return (
        <MainWrapper>
            <PostTopSection />
            <PostListSection
                mainCategoryId={mainCategoryId}
                subCategoryId={subCategoryId}
                categoryList={categoryList}
                mainCategories={mainCategories}
            />
        </MainWrapper>
    );
}
