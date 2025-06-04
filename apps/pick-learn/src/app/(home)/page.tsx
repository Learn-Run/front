import { MainWrapper } from '@/shared/ui';
import HeroSection from '@/views/home/ui/HeroSection';
import StepSection from '@/views/home/ui/StepSection';
import TopAnswererSection from '@/views/home/ui/TopAnswererSection';
import TopAskSection from '@/views/home/ui/TopAskSection';

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ category: string }>;
}) {
    const { category } = await searchParams;

    return (
        <MainWrapper className='min-h-screen '>
            <HeroSection />
            <StepSection />
            <TopAskSection category={category} />
            <TopAnswererSection />
        </MainWrapper>
    );
}
