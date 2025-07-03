import { MainWrapper } from '@/shared/ui';
import CategorySection from '@/views/home/ui/CategorySection';
import HeroSection from '@/views/home/ui/HeroSection';
import StepSection from '@/views/home/ui/StepSection';
import TopAnswererSection from '@/views/home/ui/TopAnswererSection';
import TopAskSection from '@/views/home/ui/TopAskSection';
import FloatingWriteButton from '@/views/post/ui/FloatingWriteButton';

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
        <MainWrapper>
            <HeroSection />
            <CategorySection />
            <StepSection />
            <TopAskSection
                mainCategoryId={mainCategoryId}
                page={page}
                size={size}
            />
            <TopAnswererSection />
            <FloatingWriteButton />
        </MainWrapper>
    );
}
