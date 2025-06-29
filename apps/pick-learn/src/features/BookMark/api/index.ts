'use server';
import { revalidateTag } from 'next/cache';

import { POST_TAG } from '@/entities/post/api/constants';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { BookMarkType } from './types';

export const getBookMarkStatus = async (
    postUuid: string,
): Promise<BookMarkType> => {
    const response = await fetchData.get<BookMarkType>(
        `${services.bookMark}/api/v1/bookmark/${postUuid}`,
        {
            requireAuth: true,
            tags: [POST_TAG.bookMark],
        },
    );

    return response.result;
};

export const createBookMark = async (postUuid: string) => {
    const response = await fetchData.post(
        `${services.bookMark}/api/v1/bookmark/${postUuid}`,
        {
            requireAuth: true,
        },
    );

    revalidateTag(POST_TAG.bookMark);

    return response;
};

export const cancelBookMark = async (postUuid: string) => {
    const response = await fetchData.delete(
        `${services.bookMark}/api/v1/bookmark/${postUuid}`,
        {
            requireAuth: true,
        },
    );

    revalidateTag(POST_TAG.bookMark);

    return response;
};
