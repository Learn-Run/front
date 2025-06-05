import Image from 'next/image';

import RankLabel from '@/entities/post/ui/RankLabel';
import { topAnswererList } from '@/entities/member/api/types';
import Profile from '@/entities/member/ui/Profile';

export default function TopAnswererCardList() {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-5 container mx-auto px-4 md:px-0 items-center justify-items-center'>
            {topAnswererList.map((item) => (
                <li
                    className='overflow-hidden col-span-1 h-[418px] w-full max-w-[390px]'
                    key={item.memberUuid}
                >
                    <div className='relative w-full h-full flex flex-col justify-start aspect-[4/3] p-4'>
                        <RankLabel className='absolute top-2 left-2 z-10' />
                        <Image
                            src={item.profileImage}
                            alt={item.alt}
                            fill
                            className='object-cover z-0 rounded-2xl'
                        />

                        <div className='relative z-10 mt-auto flex flex-col gap-1 text-white'>
                            <span className='font-medium'>{item.nickname}</span>
                            <p className='text-sm leading-snug'>
                                {item.selfintroduction}
                            </p>
                            <hr className='border-white' />
                            <Profile item={item} className='text-white' />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
