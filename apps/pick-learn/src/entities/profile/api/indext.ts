import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ProfileType } from './types';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

//FIXME: api연동 수정필요
export const token = getServerSession(options).then(
    (session) => session?.user.accessToken,
);

export const getProfile = async (memberUuid: string) => {
    const response = await fetchData.get<ProfileType>(
        `${services.post}/api/v1/profile`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'X-MEMBER-UUID': memberUuid,
            },
        },
    );
    return response.result;
};
