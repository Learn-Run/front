'use server';
import { fetchData } from '@/shared/api/instance';
import { CommentListType } from './types';
import { services } from '@/shared/api/constants';
import { POST_TAG } from '@/entities/post/api/constants';

export const getCommetList = async (
    postUuid: string,
    page: number,
): Promise<CommentListType> => {
    const response = await fetchData.get(
        `${services.comment}/api/v1/comment/post/${postUuid}/list?page=${page}`,
        {
            tags: [POST_TAG.comment],
        },
    );

    return response.result as CommentListType;
};
