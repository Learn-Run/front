import Tiptap from '@/shared/ui/Input/Tiptap';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function PostDetailContentSection({
    contents,
}: {
    contents: string;
}) {
    return (
        <SectionWrapper className='pt-11'>
            <Tiptap value={contents} readOnly />
        </SectionWrapper>
    );
}
