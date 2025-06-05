'use server';

import { fetchData } from '@/shared/api/instance';
import { MainCategoryType } from './types';

export const getMainCategories = async (): Promise<MainCategoryType[]> => {
    const response = await fetchData.get<MainCategoryType[]>(
        `/community-service/api/v1/category/main`,
    );
    return response.result;
};
