'use client';
import { PostDetailBookMark } from '@/shared/assets/icons';
import { cancelBookMark, createBookMark } from '../api';
import { BookMarkType } from '../api/types';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import PostDetailBookMarkFill from '@/shared/assets/icons/PostDetailBookMarkFill';
import { useSpharosSession } from '@/shared/model/sessionContext';

export default function BookMarkButton({
    postUuid,
    bookMarkStatus,
}: {
    postUuid: string;
    bookMarkStatus: BookMarkType | null;
}) {
    const alert = useAlert();
    const isAuth = useSpharosSession();
    const handleBookMark = async () => {
        await createBookMark(postUuid);
        alert.basic('북마크 추가 완료');
    };

    const handleCancelBookMark = async () => {
        await cancelBookMark(postUuid);
        alert.basic('북마크 삭제 완료');
    };

    if (!isAuth)
        return (
            <button onClick={() => alert.error('로그인 후 이용해주세요.')}>
                <PostDetailBookMark />
            </button>
        );

    if (bookMarkStatus?.bookmarked === true) {
        return (
            <button onClick={handleCancelBookMark}>
                <PostDetailBookMarkFill />
            </button>
        );
    }

    return (
        <button onClick={handleBookMark}>
            <PostDetailBookMark />
        </button>
    );
}
