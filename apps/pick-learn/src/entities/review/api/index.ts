'use server';
import { fetchData } from '@/shared/api/instance';
import { services } from '@/shared/api/constants';
import { ReviewType, ReviewAverageType } from './types';

export const getReviewList = async (reviewId: string) => {
    const response = await fetchData.get<ReviewType>(
        `${services.review}/api/v1/review/info/${reviewId}`,
    );

    return response.result;
};

export const getReviewAverage = async (memberUuid: string) => {
    const response = await fetchData.get<ReviewAverageType>(
        `${services.review}/api/v1/member-review/${memberUuid}/rating/average`,
    );

    return response.result.ratingAvg;
};
