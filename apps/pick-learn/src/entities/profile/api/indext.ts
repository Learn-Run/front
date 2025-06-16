'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ProfileType } from './types';

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
