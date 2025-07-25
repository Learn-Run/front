import { cn } from '@repo/ui/lib/utils';
import { getPostDetail } from '@/entities/post/api';
import { BookMarkListType } from '@/entities/bookMark/api/types';
import PostCard from '@/entities/post/ui/PostCard';
import { EmptySection } from '@/features/profile/ui';

export default async function MyBookmarkList({
    bookMarkList,
}: {
    bookMarkList?: BookMarkListType;
}) {
    if (!bookMarkList) return <EmptySection />;

    const myBookMarkList = await Promise.all(
        bookMarkList.postUuid.map(
            async (item) => await getPostDetail({ postUuid: item }),
        ),
    );

    return (
        <ul
            className={cn(
                'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 container mx-auto md:px-0 items-center justify-center xl:max-w-[1262px] mb-10 w-full',
            )}
        >
            {myBookMarkList.map((item) => (
                <PostCard key={item.postUuid} item={item} />
            ))}
        </ul>
    );
}
