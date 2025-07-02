import CurrentMessage from './CurrentMessageSection';
import ActiveHistorySection from './ActiveHistorySection';
import { SectionWrapper } from '@/shared/ui';

export default function MainTopSection() {
    return (
        <SectionWrapper>
            <div className='flex flex-cols-1 lg:flex-cols-2 mt-8 gap-x-2 border-b border-gray-300 pb-8'>
                <CurrentMessage />
                <ActiveHistorySection />
            </div>
        </SectionWrapper>
    );
}
