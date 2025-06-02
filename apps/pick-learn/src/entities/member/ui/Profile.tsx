import Image from 'next/image';

import { ProfileType } from '../api/types';

export default function Profile({ item }: { item: ProfileType }) {
    return (
        <div className='flex gap-x-2.5 items-center w-full'>
            <Image
                className='w-7 h-7 rounded-full bg-gray-600/20'
                src={item.profileImage}
                alt={item.alt}
                width={28}
                height={28}
            />
            <p>{item.nickname}</p>
        </div>
    );
}
