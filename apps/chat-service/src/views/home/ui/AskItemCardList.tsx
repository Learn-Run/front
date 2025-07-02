import { cn } from '@repo/ui/lib/utils';
import { AskListType } from '@/entities/post/api/types';
import PostListCard from './PostListCard';
import PostEmptySection from './PostEmptySection';

export default async function AskItemCardList({
    className,
    postList,
}: {
    className?: string;
    postList: AskListType;
}) {
    if (!postList || postList.posts.length === 0) return <PostEmptySection />;
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <ul
                className={cn(
                    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:px-0 items-center justify-center px-4 xl:max-w-[1262px] w-full',
                    className,
                )}
            >
                {postList.posts.map((item) => (
                    <PostListCard key={item.postUuid} item={item} />
                ))}
            </ul>
        </div>
    );
}
