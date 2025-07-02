import { EmptySection } from '@/features/profile/ui';
import { MyActivePostListType } from '../api/types';
import { getComment } from '@/entities/comment/api';
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

    return (
        <ul className={cn('w-full')}>
            {myActiveCommentList.map((item) => (
                <CommentList key={item.commentUuid} comment={item} />
            ))}
        </ul>
    );
}
