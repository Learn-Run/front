import { getCategoryList, getMainCategories } from '@/entities/category/api';
import { getPostList } from '@/entities/post/api';
import { getBookMarkStatus } from '@/features/BookMark/api';
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

export default async function page({
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

    const bookMarkStatus = await Promise.all(
        postList.posts.map(
            async (item) => await getBookMarkStatus(item.postUuid),
        ),
    );

    return (
        <MainWrapper>
            <PopularPostTopSection />

            <PopularPostListSection
                searchParams={params}
                categoryList={categoryList}
                mainCategories={mainCategories}
                postList={postList}
                bookMarkStatus={bookMarkStatus}
                className='pt-20'
            />
            <Pagination totalPage={postList.totalPages} />
        </MainWrapper>
    );
}
