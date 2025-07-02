import { dateFormat } from '@/shared/utils/dateFormat';
import { AskDetailType } from '@/entities/post/api/types';
import { Clock, Eye } from '@/shared/assets/icons';
import Profile from '@/entities/member/ui/Profile';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import BookMarkButton from '@/features/BookMark/ui/BookMarkButton';
import { getBookMarkStatus } from '@/features/BookMark/api';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

export default async function PostDetailTopsection({
    postDetail,
}: {
    postDetail: AskDetailType;
}) {
    const session = await getServerSession(options);
    const bookMarkStatus = session
        ? await getBookMarkStatus(postDetail.postUuid)
        : null;
    return (
        <SectionWrapper className='pt-11 flex items-center justify-between'>
            <Profile memberUuid={postDetail.memberUuid} />
            <ul className='flex items-center gap-x-4 whitespace-nowrap text-gray-600 text-sm'>
                <li className='flex items-center gap-x-1'>
                    <Clock />
                    <p>{dateFormat(postDetail.updatedAt)}</p>
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
