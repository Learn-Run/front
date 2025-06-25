'use client';
import Image from 'next/image';

import { ProfileImageType } from '@/entities/profile/api/types';
import { S3_BASE_URL } from '@/shared/model/constants';
import { uploadImageFile } from '@/features/profile/api';
import { uploadFileToS3 } from '@/shared/api/s3-service';
import { uuidConverter } from '@/shared/lib/Alert/uuidConverter';
import Pencil from '@/shared/assets/icons/Pencil';

export default function ProfileImage({
    profileImage,
    isMyProfile,
}: {
    profileImage: ProfileImageType;
    isMyProfile: boolean;
}) {
    console.log('🚀 ~ isMyProfile:', isMyProfile);
    const fallbackImage = S3_BASE_URL + 'baseprofile.webp';
    const imageUrl = profileImage?.imageUrl || fallbackImage;
    const alt = profileImage?.alt || profileImage?.alt + '프로필 이미지';

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log(file);
        if (!file) return;

        const ext = file.name.split('.').pop();
        const key = `${uuidConverter()}.${ext}`;

        if (file.size > 10 * 1024 * 1024) {
            return;
        }

        if (file) {
            try {
                const s3Url = await uploadFileToS3(file, key, 'profileImage');
                await uploadImageFile({
                    profileImageType: ext as 'jpg' | 'jpeg' | 'png' | 'webp',
                    profileImageUrl: s3Url,
                    alt: alt,
                });
                alert('이미지 업로드에 성공했습니다.');
            } catch (error) {
                console.log('🚀 ~ handleChange ~ error:', error);
                alert('이미지 업로드에 실패했습니다.');
            }
        }
    };

    return (
        <>
            {isMyProfile ? (
                <label className='cursor-pointer relative'>
                    <Pencil className='absolute top-2 right-2 bg-white rounded-xl' />
                    <Image
                        src={imageUrl}
                        alt={alt}
                        width={130}
                        height={230}
                        className='rounded-2xl h-[230px] object-cover w-full md:w-[230px]'
                    />
                    <input
                        type='file'
                        className='hidden'
                        onChange={handleChange}
                        accept='image/jpg, image/jpeg, image/png, image/webp'
                    />
                </label>
            ) : (
                <Image
                    src={imageUrl}
                    alt={alt}
                    width={130}
                    height={230}
                    className='rounded-2xl w-[230px] h-[230px] object-cover'
                />
            )}
        </>
    );
}
