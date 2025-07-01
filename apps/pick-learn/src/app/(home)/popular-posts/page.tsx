import { getCategoryList, getMainCategories } from '@/entities/category/api';
import { getPostList } from '@/entities/post/api';
import { MainWrapper, Pagination } from '@/shared/ui';
import PopularPostListSection from '@/views/popular-posts/ui/PopularPostListSection';
import PopularPostTopSection from '@/views/popular-posts/ui/PopularPostTopSection';

type SearchParams = {
    mainCategoryId: number;
    subCategoryId: number;
    categoryListId: number;
    sort?: string | 'popular';
    page?: number;
    size?: number;
};

export default async function PopularPostsPage({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const params = await searchParams;

    const zeroPage = params.page ? Math.floor(params.page - 1) : 0;
    const mainCategories = await getMainCategories();
    const categoryList = await Promise.all(
        mainCategories.map(async (mainCategory) => {
            return await getCategoryList(mainCategory.id);
        }),
    );
    const postList = await getPostList({
        ...params,
        page: zeroPage,
    });

    return (
        <MainWrapper>
            <PopularPostTopSection />

            <PopularPostListSection
                searchParams={params}
                categoryList={categoryList}
                mainCategories={mainCategories}
                postList={postList}
                className='pt-20'
            />
            <Pagination totalPage={postList.totalPages} />
        </MainWrapper>
    );
}
