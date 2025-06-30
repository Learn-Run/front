import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import {
    CommentLikeStatusType,
    CommentListType,
} from '@/entities/comment/api/types';
import { getCommentLikeCount } from '@/entities/comment/api';
import CommentList from './CommentList';

export default async function PostDetailCommentSection({
    commentList,
    commentLikeStatus,
}: {
    commentList: CommentListType;
    commentLikeStatus: CommentLikeStatusType[];
}) {
    if (!commentList.comments.length) return;
    const commentLikeCount = await Promise.all(
        commentList.comments.map(
            async (item) =>
                await getCommentLikeCount({ commentUuid: item.commentUuid }),
        ),
    );

    return (
        <SectionWrapper className='pb-11'>
            <ul>
                {commentList.comments.map((comment) => (
                    <CommentList
                        key={comment.commentUuid}
                        comment={comment}
                        commentLikeStatus={commentLikeStatus}
                        commentLikeCount={commentLikeCount}
                    />
                ))}
            </ul>
        </SectionWrapper>
    );
}
