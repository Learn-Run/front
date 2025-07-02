import CurrentMessage from './CurrentMessageSection';
import ActiveHistorySection from './ActiveHistorySection';
import { SectionWrapper } from '@/shared/ui';

export default function MainTopSection() {
    return (
        <SectionWrapper>
            <div className='flex flex-col gap-y-5 lg:flex-row mt-8 gap-x-2 border-b border-gray-300 pb-8'>
                <CurrentMessage />
                <ActiveHistorySection />
            </div>
        </SectionWrapper>
    );
}
