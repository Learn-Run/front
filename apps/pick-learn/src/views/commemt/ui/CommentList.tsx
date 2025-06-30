import { getServerSession } from 'next-auth';

import CommentDeleteButton from '@/features/comment/ui/CommentDeleteButton';
import CommentEditButton from '@/features/comment/ui/CommentEditButton';
import {
    CommentLikeCountType,
    CommentLikeStatusType,
    CommentType,
} from '@/entities/comment/api/types';
import ChatButton from './ChatButton';
import CommentLikeButton from '@/features/comment/ui/CommentLikeButton';
import { dateFormat } from '@/shared/utils/dateFormat';
import Profile from '@/entities/member/ui/Profile';
import { options } from '@/app/api/auth/[...nextauth]/options';

export default async function CommentList({
    comment,
    commentLikeStatus,
    commentLikeCount: commentLikeCount,
}: {
    comment: CommentType;
    commentLikeStatus: CommentLikeStatusType[];
    commentLikeCount: CommentLikeCountType[];
}) {
    const session = await getServerSession(options);
    const myMemberUuid = session?.user?.memberUuid;
    const isMyProfile = myMemberUuid === comment.memberUuid;

    return (
        <li key={comment.commentUuid} className='py-3 border-b border-gray-400'>
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <Profile memberUuid={comment.memberUuid} />
                    {isMyProfile && (
                        <div className='flex gap-2'>
                            <CommentEditButton
                                content={comment.content}
                                commentUuid={comment.commentUuid}
                            />
                            <CommentDeleteButton
                                commentUuid={comment.commentUuid}
                            />
                        </div>
                    )}
                </div>
                <ChatButton memberUuid={comment.memberUuid} />
            </div>

            <div className='flex justify-between'>
                <p className='text-sm pt-3'>{comment.content}</p>
                <div className='flex  gap-2 items-center'>
                    <CommentLikeButton
                        commentUuid={comment.commentUuid}
                        likeStatus={commentLikeStatus}
                    />
                    <p>
                        {
                            commentLikeCount.find(
                                (item) =>
                                    item.commentUuid === comment.commentUuid,
                            )?.likeCount
                        }
                    </p>
                </div>
            </div>
            <p className='text-xs text-gray-500 pt-3'>
                {dateFormat(comment.updatedAt)}
            </p>
        </li>
    );
}
