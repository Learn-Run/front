import { EmptySection } from '@/features/profile/ui';
import { MyActivePostListType } from '../api/types';
import {
    getComment,
    getCommentLikeCount,
    getCommentLikeStatus,
} from '@/entities/comment/api';
import { cn } from '@repo/ui/lib/utils';
import CommentList from '@/views/commemt/ui/CommentList';

export default async function MyCommentList({
    myActiveHistoryList,
}: {
    myActiveHistoryList?: MyActivePostListType;
}) {
    if (!myActiveHistoryList) return <EmptySection />;

    const myActiveCommentList = await Promise.all(
        myActiveHistoryList.posts.map((item) => getComment(item.uuid)),
    );
    const commentLikeStatus = await Promise.all(
        myActiveCommentList.map((item) =>
            getCommentLikeStatus(item.commentUuid),
        ),
    );
    const commentLikeCount = await Promise.all(
        myActiveCommentList.map((item) =>
            getCommentLikeCount({ commentUuid: item.commentUuid }),
        ),
    );

    return (
        <ul className={cn('w-full')}>
            {myActiveCommentList.map((item) => (
                <CommentList
                    key={item.commentUuid}
                    comment={item}
                    commentLikeStatus={commentLikeStatus}
                    commentLikeCount={commentLikeCount}
                />
            ))}
        </ul>
    );
}
