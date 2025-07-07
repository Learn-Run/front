import { getSearchPost } from '@/features/search/api';
import { MainWrapper, Pagination } from '@/shared/ui';
import AskItemCardList from '@/views/home/ui/AskItemCardList';

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
        return <div>검색 결과가 없습니다.</div>;

    return (
        <MainWrapper className='pt-40'>
            <AskItemCardList postList={result} />
            <Pagination totalPage={result.totalPages} />
        </MainWrapper>
    );
}
