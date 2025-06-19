import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { AskListType } from '@/entities/post/api/types';
import { BookMark, Shared } from '@/shared/assets/icons';
import TopAskSubCategory from '@/entities/category/ui/TopAskSubCategory';
import Profile from '@/entities/member/ui/Profile';
import PostEmptySection from '@/shared/ui/PostEmptySection';
import { routes } from '@/shared/model/constants/routes';

export default async function AskItemCardList({
    className,
    postList,
}: {
    className?: string;
    postList?: AskListType;
}) {
    if (!postList || postList.posts.length === 0) return <PostEmptySection />;

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <ul
                className={cn(
                    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 container mx-auto md:px-0 items-center justify-center md:max-w-[80%] xl:max-w-[1262px]',
                    className,
                )}
            >
                {postList.posts.map((item) => (
                    <li key={item.postUuid}>
                        <Link
                            href={`${routes.post}/${item.postUuid}`}
                            className='flex flex-col items-start justify-between border border-gray-400 rounded-2xl h-50 w-full px-5 py-6'
                        >
                            <div className='flex justify-between w-full'>
                                <Profile memberUuid={item.memberUuid} />
                                <div className='flex gap-x-2.5 items-center'>
                                    <BookMark />
                                    <Shared />
                                </div>
                            </div>
                            <TopAskSubCategory
                                subCategoryId={item.subCategoryId}
                            />
                            <h3 className='text-lg font-medium truncate w-full'>
                                {item.title}
                            </h3>
                            <p className='text-sm text-gray-700 truncate w-full'>
                                {item.contents}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
