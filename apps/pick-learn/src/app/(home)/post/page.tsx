import { getCategoryList, getMainCategories } from '@/entities/category/api';
import { MainWrapper } from '@/shared/ui';
import PostFilterSection from '@/views/post/ui/PostFilterSection';
import PostListSection from '@/views/post/ui/PostListSection';
import PostTopSection from '@/views/post/ui/PostTopSection';

type SearchParams = {
    mainCategoryId: number;
    subCategoryId: number;
    categoryListId: number;
    sort: string;
};

export default async function page({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { mainCategoryId, subCategoryId, categoryListId, sort } =
        await searchParams;
    const mainCategories = await getMainCategories();
    const categoryList = await Promise.all(
        mainCategories.map(async (mainCategory) => {
            return await getCategoryList(mainCategory.id);
        }),
    );

    return (
        <MainWrapper>
            <PostTopSection />
            <PostFilterSection
                mainCategoryId={mainCategoryId}
                subCategoryId={subCategoryId}
                categoryListId={categoryListId}
                sort={sort}
            />
            <PostListSection
                mainCategoryId={mainCategoryId}
                subCategoryId={subCategoryId}
                categoryList={categoryList}
                mainCategories={mainCategories}
            />
        </MainWrapper>
    );
}
