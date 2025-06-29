import { getServerSession } from 'next-auth';

import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import { CommentListType } from '@/entities/comment/api/types';
import Profile from '@/entities/member/ui/Profile';
import CommentDeleteButton from '@/features/comment/ui/CommentDeleteButton';
import { options } from '@/app/api/auth/[...nextauth]/options';
import CommentEditButton from '@/features/comment/ui/CommentEditButton';

export default async function PostDetailCommentSection({
    commentList,
}: {
    commentList: CommentListType;
}) {
    if (!commentList.comments.length) return;

    const session = await getServerSession(options);
    const myMemberUuid = session?.user?.memberUuid;
    return (
        <SectionWrapper className='pb-11'>
            <ul>
                {commentList.comments.map((comment) => (
                    <li
                        key={comment.commentUuid}
                        className='py-3 border-b border-gray-400'
                    >
                        <Profile memberUuid={comment.memberUuid} />
                        {/* <p className='text-sm'>{comment.updatedAt}</p> */}
                        <div className='flex justify-between'>
                            <p className='text-sm pt-3'>{comment.content}</p>
                            {myMemberUuid === comment.memberUuid && (
                                <div className='flex gap-2'>
                                    <CommentDeleteButton
                                        commentUuid={comment.commentUuid}
                                    />
                                    <CommentEditButton
                                        content={comment.content}
                                        commentUuid={comment.commentUuid}
                                    />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    );
}
