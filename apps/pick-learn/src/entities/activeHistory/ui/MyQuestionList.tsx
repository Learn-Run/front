import { cn } from '@repo/ui/lib/utils';
import { getPostDetail } from '@/entities/post/api';
import { MyActivePostListType } from '../api/types';
import PostCard from '@/entities/post/ui/PostCard';
import { getBookMarkStatus } from '@/features/BookMark/api';

export default async function MyQuestionList({
    myActiveHistoryList,
}: {
    myActiveHistoryList?: MyActivePostListType;
}) {
    if (!myActiveHistoryList) return;

    const myActiveQeustionList = await Promise.all(
        myActiveHistoryList.posts.map((item) =>
            getPostDetail({ postUuid: item.uuid }),
        ),
    );

    const bookMarkStatus = await Promise.all(
        myActiveQeustionList.map(async (item) =>
            getBookMarkStatus(item.postUuid),
        ),
    );

    return (
        <ul
            className={cn(
                'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 container mx-auto md:px-0 items-center justify-center xl:max-w-[1262px] mb-10 w-full',
            )}
        >
            {myActiveQeustionList.map((item) => (
                <PostCard
                    key={item.postUuid}
                    item={item}
                    bookMarkStatus={bookMarkStatus}
                />
            ))}
        </ul>
    );
}
