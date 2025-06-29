import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import PostWriteForm from './PostWriteForm';
import { AskDetailType } from '@/entities/post/api/types';

export default function PostDetailEditSection({
    postDetail,
}: {
    postDetail: AskDetailType;
}) {
    console.log('🚀 ~ postDetail:', postDetail);
    const initialData = {
        mainCategoryId: postDetail.mainCategoryId,
        subCategoryId: postDetail.subCategoryId,
        title: postDetail.title,
        contents: postDetail.contents,
    };

    return (
        <SectionWrapper>
            <PostWriteForm
                mode='edit'
                postId={postDetail.postUuid}
                initialData={initialData}
            />
        </SectionWrapper>
    );
}
