'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { AskDetailType, AskListType } from './types';
import { POST_TAG } from './constants';

export const getPostList = async ({
    sort = 'recent',
    page = 0,
    size = 9,
    mainCategoryId,
    subCategoryId,
}: {
    sort?: string;
    page?: number;
    size?: number;
    mainCategoryId?: number;
    subCategoryId?: number;
}) => {
    const params = new URLSearchParams();

    if (mainCategoryId) {
        params.set('mainCategoryId', mainCategoryId.toString());
    }
    if (subCategoryId) {
        params.set('subCategoryId', subCategoryId.toString());
    }
    params.set('sort', sort);
    params.set('page', page.toString());
    params.set('size', size.toString());

    const response = await fetchData.get<AskListType>(
        `${services.postRead}/api/v1/post-read?${params.toString()}`,
        {
            tags: [POST_TAG.postDetail, POST_TAG.bookMark],
        },
    );

    return response.result;
};

export const getPostDetail = async ({ postUuid }: { postUuid: string }) => {
    const response = await fetchData.get<AskDetailType>(
        `${services.postRead}/api/v1/post-read/${postUuid}`,
        {
            requireAuth: true,
            tags: [POST_TAG.postDetail, POST_TAG.bookMark],
        },
    );
    return response.result;
};
