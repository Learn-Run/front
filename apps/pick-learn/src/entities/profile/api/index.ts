'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ProfileType, WriterProfileType } from './types';
import { PROFILE_TAG } from './constants';

export const getMyProfile = async () => {
    const response = await fetchData.get<ProfileType>(
        `${services.profile}/api/v1/profile/my-info`,
        {
            requireAuth: true,
        },
    );

    return response.result;
};

export const getWrtierProfileByMemberUuid = async (memberUuid?: string) => {
    if (!memberUuid) return;

    const response = await fetchData.get<WriterProfileType>(
        `${services.profile}/api/v1/profile/author/${memberUuid}`,
        {
            tags: [PROFILE_TAG.writerProfile],
        },
    );

    return response.result;
};

export const getProfile = async (memberUuid: string) => {
    const response = await fetchData.get<ProfileType>(
        `${services.profile}/api/v1/profile/member/${memberUuid}`,
        {
            tags: [PROFILE_TAG.profile],
        },
    );

    return response.result;
};
