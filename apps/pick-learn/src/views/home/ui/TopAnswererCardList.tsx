import Image from 'next/image';

import RankLabel from '@/entities/post/ui/RankLabel';
import { topAnswererList } from '@/entities/member/api/types';
import Profile from '@/entities/member/ui/Profile';

//FIXME: 답변자랭커 reponse데이터 수정 후 디자인에 맞게 수정할 예정
export default function TopAnswererCardList() {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 container mx-auto px-4 md:px-0 items-center justify-center md:max-w-[80%] xl:max-w-[1262px]'>
            {topAnswererList.map((item) => (
                <li
                    className='rounded-2xl w-full max-w-[400px] h-full max-h-[418px] overflow-hidden shadow-md'
                    key={item.memberUuid}
                >
                    <div className='relative w-full flex flex-col justify-start aspect-[4/3] p-4'>
                        <RankLabel className='absolute top-2 left-2 z-10' />
                        <Image
                            src={item.profileImage}
                            alt={item.alt}
                            fill
                            className='object-cover z-0'
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
