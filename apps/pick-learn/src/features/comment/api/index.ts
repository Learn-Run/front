'use server';
import { revalidateTag } from 'next/cache';

import { fetchData } from '@/shared/api/instance';
import { services } from '@/shared/api/constants';
import { POST_TAG } from '@/entities/post/api/constants';

export const CreateComment = async (postUuid: string, content: string) => {
    const response = await fetchData.post(
        `${services.comment}/api/v1/comment/post/${postUuid}`,
        {
            requireAuth: true,
            body: JSON.stringify({ content }),
        },
    );
    revalidateTag(POST_TAG.postDetail);
    return response.isSuccess;
};

export const DeleteComment = async (commentUuid: string) => {
    const response = await fetchData.delete(
        `${services.comment}/api/v1/comment/${commentUuid}`,
        {
            requireAuth: true,
        },
    );

    revalidateTag(POST_TAG.postDetail);
    revalidateTag(POST_TAG.comment);

    return response.isSuccess;
};

export const UpdateComment = async (commentUuid: string, content: string) => {
    const response = await fetchData.patch(
        `${services.comment}/api/v1/comment/${commentUuid}`,
        {
            requireAuth: true,
            body: JSON.stringify({ content }),
        },
    );

    revalidateTag(POST_TAG.postDetail);
    revalidateTag(POST_TAG.comment);

    return response.isSuccess;
};

export const createlikeComment = async (commentUuid: string) => {
    const response = await fetchData.post(
        `${services.comment}/api/v1/comment-like/${commentUuid}`,
        {
            requireAuth: true,
        },
    );

    revalidateTag(POST_TAG.comment);
    revalidateTag(POST_TAG.postDetail);

    return response.isSuccess;
};

export const deleteCommentLike = async (commentUuid: string) => {
    const response = await fetchData.delete(
        `${services.comment}/api/v1/comment-like/${commentUuid}`,
        {
            requireAuth: true,
        },
    );

    revalidateTag(POST_TAG.comment);
    revalidateTag(POST_TAG.postDetail);

    return response.isSuccess;
};
