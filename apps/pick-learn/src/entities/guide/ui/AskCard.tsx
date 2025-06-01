import { askItemList } from '@/features/post/api/type';

export default function AskItemCardList() {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 container mx-auto px-4 md:px-0 items-center justify-center md:max-w-[80%] xl:max-w-[1262px]'>
            {askItemList.map((item) => (
                <li
                    key={item.askUuid}
                    className='flex flex-col items-start justify-center border border-gray-400 rounded-2xl h-50 w-full px-5 py-6'
                >
                    <div className='w-[28px] h-[28px] rounded-full bg-gray-600'>
                        o
                    </div>
                    <div className='text-sm bg-point-green-200/20 text-point-green-200 rounded-full w-fit py-1 px-1.5 my-5'>
                        benefit
                    </div>
                    <div className='text-lg font-medium'>{item.askTitle}</div>
                    <div className='text-sm text-gray-700'>
                        {item.askContent}
                    </div>
                </li>
            ))}
        </ul>
    );
}
