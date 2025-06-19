import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function PostDetailContentSection({
    contents,
}: {
    contents: string;
}) {
    return <SectionWrapper className='pt-11'>{contents}</SectionWrapper>;
}
