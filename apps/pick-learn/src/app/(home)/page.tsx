import { MainWrapper } from '@/shared/ui';
import HeroSection from '@/views/home/ui/HeroSection';
import StepSection from '@/views/home/ui/StepSection';
import TopAskSection from '@/views/home/ui/TopAskSection';

export default function Home() {
    return (
        <MainWrapper>
            <HeroSection />
            <StepSection />
            <TopAskSection />
        </MainWrapper>
    );
}
