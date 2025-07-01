'use client';

import { Like } from '@/shared/assets/icons';
import { createlikeComment, deleteCommentLike } from '../api';
import LikeFill from '@/shared/assets/icons/LikeFill';
import { CommentLikeStatusType } from '@/entities/comment/api/types';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import { useSpharosSession } from '@/shared/model/sessionContext';

export default function CommentLikeButton({
    commentUuid,
    likeStatus,
}: {
    commentUuid: string;
    likeStatus: CommentLikeStatusType | null;
}) {
    const alert = useAlert();
    const isAuth = useSpharosSession();

    const handleLike = async () => {
        try {
            await createlikeComment(commentUuid);
        } catch (error) {
            alert.error('좋아요 추가 실패');
            console.log('🚀 ~ handleLike ~ error:', error);
        }
        alert.basic('좋아요 추가 되었습니다 ');
    };

    const handleUnlike = async () => {
        await deleteCommentLike(commentUuid);
        alert.basic('좋아요 제거 되었습니다 ');
    };

    if (!isAuth)
        return (
            <button onClick={() => alert.error('로그인 후 이용해주세요.')}>
                <Like />
            </button>
        );

    if (likeStatus?.liked === true) {
        return (
            <button onClick={handleUnlike} className='cursor-pointer'>
                <LikeFill />
            </button>
        );
    }
    return (
        <>
            <button onClick={handleLike} className='cursor-pointer'>
                <Like />
            </button>
        </>
    );
}
