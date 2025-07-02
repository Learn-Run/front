'use server';
import { fetchData } from '@/shared/api/instance';
import { PointHistoryType, PointListType } from './types';
import { services } from '@/shared/api/constants';

export const getPointList = async () => {
    const response = await fetchData.get<PointListType[]>(
        `${services.point}/api/v1/point-charge/info/all`,
    );
    return response.result;
};

export const getPointHistory = async ({
    cursor,
    size = 10,
    startDate,
    endDate,
}: {
    cursor?: string;
    size?: number;
    startDate?: string;
    endDate?: string;
}) => {
    const params = new URLSearchParams();

    if (cursor) {
        params.set('cursor', cursor);
    }
    params.set('size', size.toString());
    if (startDate) {
        params.set('startDate', startDate);
    }
    if (endDate) {
        params.set('endDate', endDate);
    }

    const response = await fetchData.get<PointHistoryType>(
        `${services.point}/api/v1/member-point/info?${params.toString()}`,
        {
            requireAuth: true,
        },
    );
    return response.result;
};
