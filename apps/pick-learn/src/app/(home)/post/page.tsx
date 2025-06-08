import { CategorySearchParams } from '@/entities/category/api/types';
import { MainWrapper } from '@/shared/ui';
import PostListSection from '@/views/post/ui/PostListSection';
import PostTopSection from '@/views/post/ui/PostTopSection';

export default async function page({
    searchParams,
}: {
    searchParams: Promise<CategorySearchParams>;
}) {
    const { mainCategoryId, detailCategoryId } = await searchParams;
    return (
        <MainWrapper>
            <PostTopSection />
            <PostListSection
                mainCategoryId={mainCategoryId}
                detailCategoryId={detailCategoryId}
            />
        </MainWrapper>
    );
}
