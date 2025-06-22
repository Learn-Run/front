import Image from 'next/image';

import { ProfileImageType } from '@/entities/profile/api/types';
import { S3_BASE_URL } from '@/shared/model/constants';

export default function ProfileImage({
    profileImage,
}: {
    profileImage: ProfileImageType;
}) {
    const fallbackImage = S3_BASE_URL + 'baseprofile.webp';
    const imageUrl = profileImage?.imageUrl || fallbackImage;
    const alt = profileImage?.alt || profileImage?.alt + '프로필 이미지';

    return (
        <div>
            <Image
                src={imageUrl}
                alt={alt}
                width={330}
                height={440}
                className='rounded-2xl w-[330px] h-[440px] object-cover mt-15'
            />
        </div>
    );
}
