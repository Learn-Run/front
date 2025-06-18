'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ProfileType, WriterProfileType } from './types';

//FIXME: api연동 수정필요
export const getProfile = async () => {
    const response = await fetchData.get<ProfileType>(
        `${services.post}/api/v1/profile/my-info`,
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
    );

    return response.result;
};
