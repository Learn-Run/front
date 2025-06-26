import { dateFormat } from '@/shared/utils/dateFormat';
import { AskDetailType } from '@/entities/post/api/types';
import { Clock, Eye } from '@/shared/assets/icons';
import Profile from '@/entities/member/ui/Profile';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import BookMarkButton from '@/features/BookMark/ui/BookMarkButton';
import { BookMarkType } from '@/features/BookMark/api/types';

export default function PostDetailTopsection({
    postDetail,
    bookMarkStatus,
}: {
    postDetail: AskDetailType;
    bookMarkStatus: BookMarkType;
}) {
    return (
        <SectionWrapper className='pt-11 flex items-center justify-between'>
            <Profile memberUuid={postDetail.memberUuid} />
            <ul className='flex items-center gap-x-4 whitespace-nowrap text-gray-600 text-sm'>
                <li className='flex items-center gap-x-1'>
                    <Clock />
                    <p>{dateFormat(postDetail.createdAt)}</p>
                </li>
                <li className='flex items-center gap-x-1'>
                    <Eye />
                    <p>{postDetail.viewCount}</p>
                </li>
                <li className='flex items-center gap-x-1'>
                    <BookMarkButton
                        postUuid={postDetail.postUuid}
                        bookMarkStatus={bookMarkStatus}
                    />
                </li>
            </ul>
        </SectionWrapper>
    );
}
