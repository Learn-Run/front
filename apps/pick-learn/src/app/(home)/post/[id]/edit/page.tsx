import { getPostDetail } from '@/entities/post/api';
import PostDetailEditSection from '@/features/post/ui/PostDetailEditSection';
import { MainWrapper } from '@/shared/ui';

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const postDetail = await getPostDetail({ postUuid: id });

    return (
        <MainWrapper className='pt-40'>
            <PostDetailEditSection postDetail={postDetail} />
        </MainWrapper>
    );
}
