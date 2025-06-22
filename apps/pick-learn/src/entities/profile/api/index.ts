'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ProfileType, WriterProfileType } from './types';

export const getMyProfile = async () => {
    const response = await fetchData.get<ProfileType>(
        `${services.profile}/api/v1/profile/my-info`,
        {
            requireAuth: true,
        },
    );

    console.log('🚀 ~ getMyProfile ~ response:', response);
    return response.result;
};

export const getWrtierProfileByMemberUuid = async (memberUuid?: string) => {
    if (!memberUuid) return;

    const response = await fetchData.get<WriterProfileType>(
        `${services.profile}/api/v1/profile/author/${memberUuid}`,
    );

    return response.result;
};
