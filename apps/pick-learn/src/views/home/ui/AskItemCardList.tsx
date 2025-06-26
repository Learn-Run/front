import Link from 'next/link';
import { htmlToText } from 'html-to-text';

import { cn } from '@repo/ui/lib/utils';
import { Shared } from '@/shared/assets/icons';
import { routes } from '@/shared/model/constants/routes';
import { AskListType } from '@/entities/post/api/types';
import { BookMarkType } from '@/features/BookMark/api/types';
import TopAskSubCategory from '@/entities/category/ui/TopAskSubCategory';
import Profile from '@/entities/member/ui/Profile';
import PostEmptySection from '@/shared/ui/PostEmptySection';
import PostListBookMarkButton from '@/features/BookMark/ui/PostListBookMarkButton';

export default async function AskItemCardList({
    className,
    postList,
    bookMarkStatus,
}: {
    className?: string;
    postList?: AskListType;
    bookMarkStatus: BookMarkType[];
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
                    <li
                        key={item.postUuid}
                        className='flex flex-col items-start justify-between border border-gray-400 rounded-2xl h-50 w-full px-5 py-6'
                    >
                        <div className='flex justify-between w-full'>
                            <Profile memberUuid={item.memberUuid} />
                            <div className='flex gap-x-2.5 items-center'>
                                <PostListBookMarkButton
                                    postUuid={item.postUuid}
                                    bookMarkStatus={bookMarkStatus}
                                />
                                <Shared />
                            </div>
                        </div>
                        <Link
                            href={`${routes.post}/${item.postUuid}`}
                            className='w-full'
                        >
                            <TopAskSubCategory
                                subCategoryId={item.subCategoryId}
                            />
                            <h3 className='text-lg font-medium truncate w-full'>
                                {item.title}
                            </h3>

                            <p className='text-sm text-gray-700 w-full truncate'>
                                {htmlToText(item.contents, {
                                    wordwrap: false,
                                    selectors: [
                                        { selector: 'img', format: 'skip' },
                                    ],
                                })}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
