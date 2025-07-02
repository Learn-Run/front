import AskAtCategoryList from '@/entities/category/ui/AskAtCategoryList';
import Heading from '@/widgets/home/ui/Heading';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import { getPostList } from '@/entities/post/api';
import AskItemCardList from './AskItemCardList';

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
    const popularPostList = await getPostList({
        page: zeroPage,
        size,
        mainCategoryId,

        sort: 'popular',
    });

    return (
        <SectionWrapper className='space-y-10 mt-8 mb-25 lg:mb-10'>
            <Heading align='center'>
                <Heading.Title>Top ASK Openings Just for You!</Heading.Title>
                <Heading.SubTitle>
                    지금 가장 핫한 질문들을 모았습니다.
                </Heading.SubTitle>
            </Heading>
            <AskAtCategoryList mainCategoryId={mainCategoryId} />
            <AskItemCardList postList={popularPostList} />
        </SectionWrapper>
    );
}
