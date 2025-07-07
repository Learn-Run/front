'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { PostFormData } from './types';
import { revalidateTag } from 'next/cache';
import { POST_TAG } from '@/entities/post/api/constants';

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
    console.log('🚀 ~ postFormData:', postFormData);
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

export const deletePost = async (postUuid: string) => {
    const result = await fetchData.delete(
        `${services.post}/api/v1/post/${postUuid}`,
        {
            requireAuth: true,
        },
    );
    revalidateTag(POST_TAG.post);
    return result.isSuccess;
};
