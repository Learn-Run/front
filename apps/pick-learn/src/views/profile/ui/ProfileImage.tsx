import Image from 'next/image';
import React from 'react';

export default function ProfileImage() {
    return (
        <div>
            <Image
                src={
                    'https://cdn.pixabay.com/photo/2023/09/21/11/30/cat-8266486_1280.jpg'
                }
                alt='프로필 이미지'
                width={330}
                height={440}
                className='rounded-2xl w-[330px] h-[440px] object-cover mt-15'
            />
        </div>
    );
}
