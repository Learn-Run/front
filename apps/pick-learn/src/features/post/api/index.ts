'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { PostFormData } from './types';

export const createPost = async (postFormData: PostFormData) => {
    const result = await fetchData.post(`${services.post}/api/v1/post/create`, {
        requireAuth: true,
        body: JSON.stringify(postFormData),
        cache: 'no-cache',
    });

    return result.isSuccess;
};

export const updatePost = async (
    postUuid: string,
    postFormData: PostFormData,
) => {
    const result = await fetchData.patch(
        `${services.post}/api/v1/post/${postUuid}`,
        {
            requireAuth: true,
            body: JSON.stringify(postFormData),
            cache: 'no-cache',
        },
    );

    return result.isSuccess;
};
