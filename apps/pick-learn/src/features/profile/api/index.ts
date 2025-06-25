'use server';
import { revalidateTag } from 'next/cache';

import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { PROFILE_TAG } from '../../../entities/profile/api/constants';
import { ProfileUploadImageType, UpdateMyInfoType } from './types';

export const uploadImageFile = async (formData: ProfileUploadImageType) => {
    const response = await fetchData.put(
        `${services.profile}/api/v1/profile/image`,
        {
            body: JSON.stringify(formData),
            requireAuth: true,
        },
    );

    revalidateTag(PROFILE_TAG.profile);
    revalidateTag(PROFILE_TAG.writerProfile);

    return response.isSuccess;
};

export const updateNickname = async (nickname: string) => {
    const response = await fetchData.put(
        `${services.profile}/api/v1/profile/change-nickname`,
        {
            body: JSON.stringify({ nickname }),
            requireAuth: true,
        },
    );

    revalidateTag(PROFILE_TAG.profile);
    revalidateTag(PROFILE_TAG.writerProfile);

    return response.isSuccess;
};

export const updateMyInfo = async (data: UpdateMyInfoType) => {
    const response = await fetchData.put(
        `${services.profile}/api/v1/profile/info`,
        {
            body: JSON.stringify(data),
            requireAuth: true,
        },
    );

    revalidateTag(PROFILE_TAG.profile);
    revalidateTag(PROFILE_TAG.writerProfile);

    return response.isSuccess;
};
