import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function EmptySection() {
    return (
        <SectionWrapper className='flex items-center justify-center '>
            <p className='text-gray-700'>게시물이 없습니다</p>
        </SectionWrapper>
    );
}
