import { jost } from '@/shared/assets/fonts';
import { cn } from '@repo/ui/lib/utils';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import CommentWriteForm from './CommentWriteForm';

export default function ContentWriteSection({
    postUuid,
}: {
    postUuid: string;
}) {
    return (
        <SectionWrapper className='pb-4'>
            <h3 className={cn(jost.className, 'text-lg font-bold ')}>Answer</h3>
            <CommentWriteForm postUuid={postUuid} />
        </SectionWrapper>
    );
}
