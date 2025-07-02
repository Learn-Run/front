import Link from 'next/link';
import { htmlToText } from 'html-to-text';

import { routes } from '@/shared/model/constants/routes';
import { AskDetailType } from '../api/types';
import { Shared } from '@/shared/assets/icons';
import Profile from '@/entities/member/ui/Profile';
import TopAskSubCategory from '@/entities/category/ui/TopAskSubCategory';
import PostListBookMarkButton from '@/features/BookMark/ui/PostListBookMarkButton';
import { getBookMarkStatus } from '@/features/BookMark/api';

export default async function PostCard({ item }: { item: AskDetailType }) {
    const bookMarkStatus = await getBookMarkStatus(item.postUuid);

    return (
        <li
            key={item.postUuid}
            className='flex flex-col items-start justify-between border bg-white border-gray-400 rounded-2xl h-50 w-full px-5 py-6'
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
            <Link href={`${routes.post}/${item.postUuid}`} className='w-full'>
                <TopAskSubCategory subCategoryId={item.subCategoryId} />
                <h3 className='text-lg font-medium truncate w-full'>
                    {item.title}
                </h3>

                <p className='text-sm text-gray-700 w-full truncate'>
                    {htmlToText(item.contents, {
                        wordwrap: false,
                        selectors: [{ selector: 'img', format: 'skip' }],
                    })}
                </p>
            </Link>
        </li>
    );
}
