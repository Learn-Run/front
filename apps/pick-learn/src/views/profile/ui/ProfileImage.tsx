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
                width={130}
                height={230}
                className='rounded-2xl w-[230px] h-[230px] object-cover'
            />
        </div>
    );
}
