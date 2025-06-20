import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function PostWriteTopSection() {
    return (
        <SectionWrapper className='flex justify-center mb-10'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h3 className='text-4xl font-bold'>질문 하기</h3>
                <p className='text-sm text-gray-500'>
                    질문을 작성하여 궁금증을 해결해보세요 !
                </p>
            </div>
        </SectionWrapper>
    );
}
