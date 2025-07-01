import { MainWrapper, Pagination } from '@/shared/ui';
import { getPostDetail } from '@/entities/post/api';
import {
    BreadCrumbSection,
    PostDetailContentSection,
    PostDetailTitleSection,
    PostDetailTopsection,
} from '@/views/postDetail/ui';
import { getBookMarkStatus } from '@/features/BookMark/api';
import PostDetailCommentSection from '@/views/commemt/ui/PostDetailCommentSection';
import { getCommentLikeStatus, getCommetList } from '@/entities/comment/api';
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
    const bookMarkStatus = await getBookMarkStatus(id);
    const { page } = await searchParams;
    const zeroPage = page ? Math.floor(page - 1) : 0;
    const commentList = await getCommetList(id, zeroPage);

    const commentLikeStatus = await Promise.all(
        commentList.comments.map(
            async (item) => await getCommentLikeStatus(item.commentUuid),
        ),
    );

    return (
        <MainWrapper className='pt-40 bg-gradient-to-b to-gray-100 from-[#E8EFFE]'>
            <BreadCrumbSection postDetail={postDetail} />
            <PostDetailTopsection
                postDetail={postDetail}
                bookMarkStatus={bookMarkStatus}
            />
            <PostDetailTitleSection title={postDetail.title} />
            <PostDetailContentSection contents={postDetail.contents} />
            <CommenttWriteSection postUuid={id} />
            <PostDetailCommentSection
                commentList={commentList}
                commentLikeStatus={commentLikeStatus}
            />
            <Pagination totalPage={commentList.totalPages} />
        </MainWrapper>
    );
}
