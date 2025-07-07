import AskAtCategoryList from '@/entities/category/ui/AskAtCategoryList';
import { getPostList } from '@/entities/post/api';
import Pagination from '@/shared/ui/Pagination';
import Heading from '@/widgets/home/ui/Heading';
import TypingWrapper from '@repo/ui/components/wrapper/TypingWrapper';
import AskItemCardList from './AskItemCardList';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default async function TopAskSection({
    page,
    size = 8,
    mainCategoryId,
}: {
    page?: number;
    size?: number;
    mainCategoryId?: number;
}) {
    const zeroPage = page ? Math.floor(page - 1) : 0;

    try {
        const popularPostList = await getPostList({
            page: zeroPage,
            size,
            mainCategoryId,
            sort: 'POPULAR',
        });

        return (
            <SectionWrapper className='space-y-10 my-25'>
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
                <Pagination totalPage={popularPostList.totalPages} />
            </SectionWrapper>
        );
    } catch (error) {
        console.error('Failed to fetch popular posts:', error);

        return (
            <SectionWrapper className='space-y-10 my-25'>
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
                <div className='text-center py-8'>
                    <p className='text-gray-500'>
                        인기 게시글을 불러오는 중 문제가 발생했습니다.
                    </p>
                    <p className='text-sm text-gray-400 mt-2'>
                        잠시 후 다시 시도해주세요.
                    </p>
                </div>
            </SectionWrapper>
        );
    }
}
