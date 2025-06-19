import { dateFormat } from '@/shared/utils/dateFormat';
import { AskDetailType } from '@/entities/post/api/types';
import { Clock, Eye, Like } from '@/shared/assets/icons';
import Profile from '@/entities/member/ui/Profile';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function PostDetailTopsection({
    postDetail,
}: {
    postDetail: AskDetailType;
}) {
    return (
        <SectionWrapper className='pt-11 flex items-center justify-between'>
            <Profile memberUuid={postDetail.memberUuid} />
            <div className='flex items-center gap-x-2 whitespace-nowrap text-gray-600 text-sm'>
                <Clock />
                <p>{dateFormat(postDetail.createdAt)}</p>
                <Eye />
                <p>{postDetail.viewCount}</p>
                <Like />
                <p>{postDetail.likeCount}</p>
            </div>
        </SectionWrapper>
    );
}
