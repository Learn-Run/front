import TopAskSubCategory from '@/entities/category/ui/TopAskSubCategory';
import Profile from '@/entities/member/ui/Profile';
import { askItemList } from '@/entities/post/api/types';
import BookMark from '@/shared/assets/icons/BookMark';
import Shared from '@/shared/assets/icons/Shared';

export default function AskItemCardList() {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 container mx-auto px-4 md:px-0 items-center justify-center md:max-w-[80%] xl:max-w-[1262px]'>
            {askItemList.map((item) => (
                <li
                    key={item.postUuid}
                    className='flex flex-col items-start justify-between border border-gray-400 rounded-2xl h-50 w-full px-5 py-6'
                >
                    <div className='flex justify-between w-full'>
                        <Profile item={item.author} />
                        <div className='flex gap-x-2.5 items-center'>
                            <BookMark />
                            <Shared />
                        </div>
                    </div>
                    <TopAskSubCategory item={item.category} />
                    <h3 className='text-lg font-medium'>{item.title}</h3>
                    <p className='text-sm text-gray-700'>{item.contents}</p>
                </li>
            ))}
        </ul>
    );
}
