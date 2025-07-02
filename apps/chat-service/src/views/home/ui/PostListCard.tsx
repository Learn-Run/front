import TopAskSubCategory from '@/entities/category/ui/TopAskSubCategory';
import Profile from '@/entities/member/ui/Profile';
import { AskListType } from '@/entities/post/api/types';
import { getBookMarkStatus } from '@/features/BookMark/api';
import PostListBookMarkButton from '@/features/BookMark/ui/PostListBookMarkButton';
import { getServerSession } from 'next-auth';
// import { htmlToText } from 'html-to-text';

export default async function PostListCard({
    item,
}: {
    item: AskListType['posts'][number];
}) {
    const session = await getServerSession();
    const bookMarkStatus = session
        ? await getBookMarkStatus(item.postUuid)
        : null;
    return (
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
                </div>
            </div>

            <TopAskSubCategory subCategoryId={item.subCategoryId} />
            <h3 className='text-lg font-medium truncate w-full'>
                {item.title}
            </h3>

            {/* <p className='text-sm text-gray-700 w-full truncate'>
                {htmlToText(item.contents, {
                    wordwrap: false,
                    selectors: [{ selector: 'img', format: 'skip' }],
                })}
            </p> */}
        </li>
    );
}
