import AskAtCategoryList from '@/entities/category/ui/AskAtCategoryList';
import { getPostList } from '@/entities/post/api';
import Pagination from '@/shared/ui/Pagination';
import Heading from '@/widgets/home/ui/Heading';
import TypingWrapper from '@repo/ui/components/wrapper/TypingWrapper';
import AskItemCardList from './AskItemCardList';

export default async function TopAskSection({
    mainCategoryId,
    page,
    size,
    categoryListId,
}: {
    mainCategoryId?: number;
    page?: number;
    size?: number;
    categoryListId?: number;
}) {
    const zeroPage = page ? Math.floor(page - 1) : 0;
    const popularPostList = await getPostList({
        page: zeroPage,
        size,
        categoryListId,
        sort: 'popular',
    });

    return (
        <section className='space-y-10 my-25'>
            <Heading align='center'>
                <Heading.Title>
                    <TypingWrapper
                        text='Top ASK Openings Just for You!'
                        className='text-4xl md:text-5xl lg:text-6xl'
                    />
                </Heading.Title>
                <Heading.SubTitle>
                    지금 가장 핫한 질문들을 모았습니다.
                </Heading.SubTitle>
            </Heading>
            <AskAtCategoryList mainCategoryId={mainCategoryId} />
            <AskItemCardList postList={popularPostList} />
            <Pagination totalPage={popularPostList.totalPage} />
        </section>
    );
}
