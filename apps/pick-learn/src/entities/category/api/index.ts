'use server';

import { fetchData } from '@/shared/api/instance';
import { MainCategoryType, SubCategoryType } from './types';

export const getMainCategories = async (): Promise<MainCategoryType[]> => {
    const response = await fetchData.get<MainCategoryType[]>(
        `/community-service/api/v1/category/main`,
    );
    return response.result;
};

export const getSubCategories = async (
    mainCategoryId: number,
): Promise<SubCategoryType[]> => {
    const response = await fetchData.get<SubCategoryType[]>(
        `/community-service/api/v1/category/main/${mainCategoryId}`,
    );
    return response.result;
};
