import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import PointTab from './PointTab';
import PointWrapper from './PointWrapper';

export default function PointSection({ type }: { type: string }) {
    return (
        <SectionWrapper>
            <div className='flex flex-col md:flex-row gap-x-5'>
                <PointTab type={type} />
                <PointWrapper type={type} />
            </div>
        </SectionWrapper>
    );
}
