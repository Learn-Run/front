import { MainWrapper } from '@/shared/ui';
import { getPostDetail } from '@/entities/post/api';
import {
    BreadCrumbSection,
    PostDetailContentSection,
    PostDetailTitleSection,
    PostDetailTopsection,
} from '@/views/postDetail/ui';
import PostDetailCategorySection from '@/views/postDetail/ui/PostDetailCategorySection';

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const postDetail = await getPostDetail({ postUuid: id });

    return (
        <MainWrapper className='pt-40 bg-gradient-to-b to-gray-100 from-[#E8EFFE]'>
            <BreadCrumbSection title={postDetail.title} />
            <PostDetailTopsection postDetail={postDetail} />
            <PostDetailCategorySection category={postDetail} />
            <PostDetailTitleSection title={postDetail.title} />
            <PostDetailContentSection contents={postDetail.contents} />
        </MainWrapper>
    );
}
