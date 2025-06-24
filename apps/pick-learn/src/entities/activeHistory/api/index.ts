'use server';
import { fetchData } from '@/shared/api/instance';
import { ActiveHistoryCountType, MyActivePostListType } from './types';
import { services } from '@/shared/api/constants';

export const getMyActivePostList = async ({
    type = 'REVIEW_RECEIVED',
    page = 0,
    size = 9,
    memberUuid,
}: {
    type?: string;
    page?: number;
    size?: number;
    memberUuid: string;
}) => {
    const params = new URLSearchParams();

    if (type) params.set('type', type);

    if (page) params.set('page', page.toString());

    if (size) params.set('size', size.toString());

    const response = await fetchData.get<MyActivePostListType>(
        `${services.activeHistory}/api/v1/active-history/${memberUuid}?${params.toString()}`,
    );

    return response.result;
};

export const getActiveHistoryCount = async ({
    memberUuid,
    period = 'TOTAL',
}: {
    memberUuid: string;
    period: string;
}) => {
    const response = await fetchData.get<ActiveHistoryCountType>(
        `${services.activeHistory}/api/v1/active-history/${memberUuid}/count?period=${period}`,
    );

    return response.result;
};
