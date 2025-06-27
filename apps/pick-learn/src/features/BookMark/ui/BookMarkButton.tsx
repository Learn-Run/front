'use client';
import { PostDetailBookMark } from '@/shared/assets/icons';
import { cancelBookMark, createBookMark } from '../api';
import { BookMarkType } from '../api/types';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import PostDetailBookMarkFill from '@/shared/assets/icons/PostDetailBookMarkFill';

export default function BookMarkButton({
    postUuid,
    bookMarkStatus,
}: {
    postUuid: string;
    bookMarkStatus: BookMarkType;
}) {
    const alert = useAlert();

    const handleBookMark = async () => {
        await createBookMark(postUuid);
        alert.basic('북마크 추가 완료');
    };

    const handleCancelBookMark = async () => {
        await cancelBookMark(postUuid);
        alert.basic('북마크 삭제 완료');
    };

    if (bookMarkStatus.bookmarked === true) {
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
