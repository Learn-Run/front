'use client';

import { BookMark, BookMarkFill } from '@/shared/assets/icons';
import { BookMarkType } from '../api/types';
import { cancelBookMark, createBookMark } from '../api';
import { useSpharosSession } from '@/shared/model/sessionContext';
import { useAlert } from '@/shared/model/hooks/useAlert';

export default function PostListBookMarkButton({
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
        alert.basic('북마크에 추가 되었습니다 ');
    };

    const handleCancelBookMark = async () => {
        await cancelBookMark(postUuid);
        alert.basic('북마크에서 제거 되었습니다 ');
    };

    if (!isAuth)
        return (
            <button onClick={() => alert.error('로그인 후 이용해주세요.')}>
                <BookMark />
            </button>
        );

    if (!bookMarkStatus) return;

    if (bookMarkStatus.bookmarked === true) {
        return (
            <button onClick={handleCancelBookMark} className='cursor-pointer'>
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
