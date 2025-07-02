import { MainWrapper } from '@/shared/ui';
import MainHeader from '@/views/home/ui/MainHeader';
import MainTopSection from '@/views/home/ui/MainTopSection';
import TopAskSection from '@/views/home/ui/TopAskSection';

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{
        mainCategoryId: number;
        page?: number;
        size?: number;
    }>;
}) {
    const { mainCategoryId, page, size } = await searchParams;

    return (
        <MainWrapper className='bg-gray-50'>
            <MainHeader />
            <MainTopSection />

            <TopAskSection
                mainCategoryId={mainCategoryId}
                page={page}
                size={size}
            />
        </MainWrapper>
    );
}
