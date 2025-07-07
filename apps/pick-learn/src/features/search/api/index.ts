'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { SearchPostType } from './types';

export const getSearchPost = async ({
    page = 0,
    size = 9,
    keyword,
}: {
    page?: number;
    size?: number;
    keyword: string;
}) => {
    const params = new URLSearchParams();

    params.set('page', page.toString());
    params.set('size', size.toString());
    params.set('keyword', keyword);

    const response = await fetchData.get<SearchPostType>(
        `${services.postRead}/api/v1/post-read/search?${params.toString()}`,
    );

    console.log('🚀 ~ getSearchPost ~  response.result:', response.result);
    return response.result;
};
