// import TopAskSubCategory from '@/entities/category/ui/TopAskSubCategory';
import Profile from '@/entities/member/ui/Profile';
import { myActivePostList } from '@/entities/post/api/types';
import BookMark from '@/shared/assets/icons/BookMark';
import Shared from '@/shared/assets/icons/Shared';
import { cn } from '@repo/ui/lib/utils';

export default function MyAskCardList({ className }: { className?: string }) {
    return (
        <ul
            className={cn(
                'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 container mx-auto md:px-0 items-center justify-center md:max-w-[80%] xl:max-w-[1262px] mb-20',
                className,
            )}
        >
            {myActivePostList.map((item) => (
                <li
                    key={item.postUuid}
                    className='flex flex-col items-start justify-between border border-gray-400 rounded-2xl h-50 w-full px-5 py-6 bg-white'
                >
                    <div className='flex justify-between w-full'>
                        <Profile memberUuid={item.memberUuid} />
                        <div className='flex gap-x-2.5 items-center'>
                            <BookMark />
                            <Shared />
                        </div>
                    </div>
                    {/* <TopAskSubCategory item={item.category} /> */}
                    <h3 className='text-lg font-medium'>{item.title}</h3>
                    <p className='text-sm text-gray-700'>{item.contents}</p>
                </li>
            ))}
        </ul>
    );
}
