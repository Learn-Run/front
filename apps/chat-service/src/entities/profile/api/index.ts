'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ProfileType } from '../model/types';

export const getMemberProfile = async (memberUuid: string) => {
    const { result } = await fetchData.get<ProfileType>(
        `${services.profile}/api/v1/profile/member/${memberUuid}`,
    );

    return result;
};
