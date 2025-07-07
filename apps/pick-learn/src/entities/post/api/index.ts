'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { AskDetailType, AskListType } from './types';
import { POST_TAG } from './constants';

export const getPostList = async ({
    sort = 'RECENT',
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

    params.set('page', page.toString());
    params.set('size', size.toString());
    params.set('postSortType', sort);

    const response = await fetchData.get<AskListType>(
        `${services.postRead}/api/v1/post-read?${params.toString()}`,
        {
            tags: [POST_TAG.postDetail, POST_TAG.bookMark],
        },
    );

    if (!response.isSuccess) {
        console.error('API Error in getPostList:', response);
        throw new Error(
            response.message || '게시글 목록을 불러오는데 실패했습니다.',
        );
    }

    return response.result;
};

export const getPostDetail = async ({ postUuid }: { postUuid: string }) => {
    const response = await fetchData.get<AskDetailType>(
        `${services.postRead}/api/v1/post-read/${postUuid}`,
        {
            tags: [POST_TAG.postDetail, POST_TAG.bookMark],
        },
    );
    return response.result;
};
