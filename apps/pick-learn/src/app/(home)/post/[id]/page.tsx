import { MainWrapper } from '@/shared/ui';
import { getPostDetail } from '@/entities/post/api';
import {
    BreadCrumbSection,
    PostDetailContentSection,
    PostDetailTitleSection,
    PostDetailTopsection,
} from '@/views/PostDetail/ui';

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const postDetail = await getPostDetail({ postUuid: id });

    return (
        <MainWrapper className='pt-40'>
            <BreadCrumbSection title={postDetail.title} />
            <PostDetailTopsection postDetail={postDetail} />
            <PostDetailTitleSection title={postDetail.title} />
            <PostDetailContentSection contents={postDetail.contents} />
        </MainWrapper>
    );
}
