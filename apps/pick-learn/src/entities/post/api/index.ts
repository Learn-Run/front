'use server';
import { fetchData } from '@/shared/api/instance';
import { PostListType } from './types';
import { services } from '@/shared/api/constants';

export const getPostList = async ({
    sort = 'recent',
    page = 0,
    size = 8,
    categoryListId,
}: {
    sort?: string;
    page?: number;
    size?: number;
    categoryListId?: number;
}) => {
    const params = new URLSearchParams();

    if (categoryListId) {
        params.set('categoryListId', categoryListId.toString());
    }

    params.set('sort', sort);
    params.set('page', page.toString());
    params.set('size', size.toString());

    const response = await fetchData.get<PostListType>(
        `${services.postRead}/api/v1/post-read?${params.toString()}`,
    );

    return response.result;
};
