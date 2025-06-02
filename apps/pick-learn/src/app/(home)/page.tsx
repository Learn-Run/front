import { MainWrapper } from '@/shared/ui';
import HeroSection from '@/views/home/ui/HeroSection';
import StepSection from '@/views/home/ui/StepSection';
import TopAskerSection from '@/views/home/ui/TopAskerSection';

export default function Home() {
    return (
        <MainWrapper className='min-h-screen space-y-10'>
            <HeroSection />
            <StepSection />
            <TopAskerSection />
        </MainWrapper>
    );
}
