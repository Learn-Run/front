import { MainWrapper } from '@/shared/ui';
import { getPostDetail } from '@/entities/post/api';
import {
    BreadCrumbSection,
    PostDetailContentSection,
    PostDetailTitleSection,
    PostDetailTopsection,
} from '@/views/postDetail/ui';
import { BookMarkStatus } from '@/features/BookMark/api';

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const postDetail = await getPostDetail({ postUuid: id });
    const bookMarkStatus = await BookMarkStatus(id);

    return (
        <MainWrapper className='pt-40 bg-gradient-to-b to-gray-100 from-[#E8EFFE]'>
            <BreadCrumbSection postDetail={postDetail} />
            <PostDetailTopsection
                postDetail={postDetail}
                bookMarkStatus={bookMarkStatus}
            />
            <PostDetailTitleSection title={postDetail.title} />
            <PostDetailContentSection contents={postDetail.contents} />
        </MainWrapper>
    );
}
