import { getSearchPost } from '@/features/search/api';
import { MainWrapper, Pagination } from '@/shared/ui';
import AskItemCardList from '@/views/home/ui/AskItemCardList';
import SearchEmptySection from '@/views/search/ui/SearchEmptySection';
import SearchTopSection from '@/views/search/ui/SearchTopSection';

export default async function page({
    searchParams,
}: {
    searchParams: Promise<{ keyword: string; page: number }>;
}) {
    const { keyword, page } = await searchParams;

    const result = await getSearchPost({
        keyword,
        page: page ? Number(page) : 0,
        size: 8,
    });

    if (!result || result?.posts.length === 0)
        return (
            <MainWrapper className='pt-40'>
                <SearchEmptySection />
            </MainWrapper>
        );

    return (
        <MainWrapper>
            <SearchTopSection />
            <AskItemCardList postList={result} className='mt-10' />
            <Pagination totalPage={result.totalPages} />
        </MainWrapper>
    );
}
