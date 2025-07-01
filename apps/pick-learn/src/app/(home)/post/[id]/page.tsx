import { MainWrapper, Pagination } from '@/shared/ui';
import { getPostDetail } from '@/entities/post/api';
import {
    BreadCrumbSection,
    PostDetailContentSection,
    PostDetailTitleSection,
    PostDetailTopsection,
} from '@/views/postDetail/ui';
import PostDetailCommentSection from '@/views/commemt/ui/PostDetailCommentSection';
import { getCommetList } from '@/entities/comment/api';
import CommenttWriteSection from '@/features/comment/ui/CommenttWriteSection';

export default async function page({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page: number }>;
}) {
    const { id } = await params;
    const postDetail = await getPostDetail({ postUuid: id });

    const { page } = await searchParams;
    const zeroPage = page ? Math.floor(page - 1) : 0;
    const commentList = await getCommetList(id, zeroPage);

    return (
        <MainWrapper className='pt-40 bg-gradient-to-b to-gray-100 from-[#E8EFFE]'>
            <BreadCrumbSection postDetail={postDetail} />
            <PostDetailTopsection postDetail={postDetail} />
            <PostDetailTitleSection title={postDetail.title} />
            <PostDetailContentSection contents={postDetail.contents} />
            <CommenttWriteSection postUuid={id} />
            <PostDetailCommentSection commentList={commentList} />
            <Pagination totalPage={commentList.totalPages} />
        </MainWrapper>
    );
}
