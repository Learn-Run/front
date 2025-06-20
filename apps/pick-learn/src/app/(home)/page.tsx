import { MainWrapper } from '@/shared/ui';
import CategorySection from '@/views/home/ui/CategorySection';
import HeroSection from '@/views/home/ui/HeroSection';
import StepSection from '@/views/home/ui/StepSection';
import TopAnswererSection from '@/views/home/ui/TopAnswererSection';
import TopAskSection from '@/views/home/ui/TopAskSection';

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{
        mainCategoryId: number;
        page?: number;
        size?: number;
        categoryListId?: number;
    }>;
}) {
    const { mainCategoryId, page, size, categoryListId } = await searchParams;

    return (
        <MainWrapper>
            <HeroSection />
            <CategorySection />
            <StepSection />
            <TopAskSection
                mainCategoryId={mainCategoryId}
                page={page}
                size={size}
                categoryListId={categoryListId}
            />
            <TopAnswererSection />
        </MainWrapper>
    );
}
