import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import { CommentListType } from '@/entities/comment/api/types';
import CommentList from './CommentList';

export default async function PostDetailCommentSection({
    commentList,
}: {
    commentList: CommentListType;
}) {
    return (
        <SectionWrapper className='pb-11'>
            <ul>
                {commentList.comments.map((comment) => (
                    <CommentList key={comment.commentUuid} comment={comment} />
                ))}
            </ul>
        </SectionWrapper>
    );
}
