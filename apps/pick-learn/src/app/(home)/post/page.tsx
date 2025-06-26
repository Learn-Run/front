import { getCategoryList, getMainCategories } from '@/entities/category/api';
import { getPostList } from '@/entities/post/api';
import { BookMarkStatus } from '@/features/BookMark/api';
import { MainWrapper, Pagination } from '@/shared/ui';
import {
    PostFilterSection,
    PostListSection,
    PostTopSection,
} from '@/views/post/ui';

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
        postList.posts.map(async (item) => await BookMarkStatus(item.postUuid)),
    );

    return (
        <MainWrapper>
            <PostTopSection />
            <PostFilterSection searchParams={params} />
            <PostListSection
                searchParams={params}
                categoryList={categoryList}
                mainCategories={mainCategories}
                postList={postList}
                bookMarkStatus={bookMarkStatus}
            />
            <Pagination totalPage={postList.totalPages} />
        </MainWrapper>
    );
}
