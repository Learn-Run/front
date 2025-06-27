'use client';
import { useMemo } from 'react';

import { BookMark, BookMarkFill } from '@/shared/assets/icons';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import { BookMarkType } from '../api/types';
import { cancelBookMark, createBookMark } from '../api';

export default function PostListBookMarkButton({
    postUuid,
    bookMarkStatus,
}: {
    postUuid: string;
    bookMarkStatus: BookMarkType[];
}) {
    const alert = useAlert();

    const handleBookMark = async () => {
        await createBookMark(postUuid);
        alert.basic('북마크에 추가 되었습니다 ');
    };

    const handleCancelBookMark = async () => {
        await cancelBookMark(postUuid);
        alert.basic('북마크에서 제거 되었습니다 ');
    };

    const isBookmarked = useMemo(
        () =>
            bookMarkStatus?.find((item) => item.postUuid === postUuid)
                ?.bookmarked === true,
        [bookMarkStatus, postUuid],
    );

    if (isBookmarked) {
        return (
            <button onClick={handleCancelBookMark}>
                <BookMarkFill />
            </button>
        );
    }

    return (
        <button onClick={handleBookMark} className='cursor-pointer'>
            <BookMark />
        </button>
    );
}
