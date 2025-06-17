import { getCategoryList, getMainCategories } from '@/entities/category/api';
import { getPostList } from '@/entities/post/api';
import { MainWrapper } from '@/shared/ui';
import Pagination from '@/shared/ui/Pagination';
import PostFilterSection from '@/views/post/ui/PostFilterSection';
import PostListSection from '@/views/post/ui/PostListSection';
import PostTopSection from '@/views/post/ui/PostTopSection';

type SearchParams = {
    mainCategoryId: number;
    subCategoryId: number;
    categoryListId: number;
    sort?: string;
    page?: number;
    size?: number;
};

export default async function page({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { mainCategoryId, subCategoryId, categoryListId, sort, page, size } =
        await searchParams;
    const zeroPage = page ? Math.floor(page - 1) : 0;
    const mainCategories = await getMainCategories();
    const categoryList = await Promise.all(
        mainCategories.map(async (mainCategory) => {
            return await getCategoryList(mainCategory.id);
        }),
    );
    const postList = await getPostList({
        sort,
        page: zeroPage,
        size,
        categoryListId,
    });

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
                page={page}
                size={size}
                categoryListId={categoryListId}
                postList={postList}
            />
            <Pagination totalPage={postList.totalPage} />
        </MainWrapper>
    );
}
