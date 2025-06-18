'use server';

import { fetchData } from '@/shared/api/instance';
import { CategoryListType, MainCategoryType, SubCategoryType } from './types';
import { services } from '@/shared/api/constants';

export const getMainCategories = async (): Promise<MainCategoryType[]> => {
    const response = await fetchData.get<MainCategoryType[]>(
        `${services.post}/api/v1/category/main`,
        {
            cache: 'force-cache',
        },
    );
    return response.result;
};

export const getCategoryList = async (
    mainCategoryId: number,
): Promise<CategoryListType[]> => {
    const response = await fetchData.get<CategoryListType[]>(
        `${services.post}/api/v1/category-list/main/${mainCategoryId}`,
        {
            cache: 'force-cache',
        },
    );

    return response.result;
};

export const createMainCategory = async (
    name: string,
    iconUrl: string,
    alt: string,
) => {
    await fetchData.post(`${services.post}/api/v1/category/main`, {
        body: JSON.stringify({ name, iconUrl, alt }),
    });
};

export const createSubCategory = async (name: string, color: string) => {
    await fetchData.post(`${services.post}/api/v1/category/sub`, {
        body: JSON.stringify({ name, color }),
    });
};

export const createCategoryList = async (
    mainCategoryId: number,
    subCategoryId: number,
) => {
    await fetchData.post(`${services.post}/api/v1/category-list`, {
        body: JSON.stringify({ mainCategoryId, subCategoryId }),
    });
};

export const getSubCategory = async (subCategoryId: number) => {
    const response = await fetchData.get<SubCategoryType>(
        `${services.post}/api/v1/category/sub/${subCategoryId}`,
    );
    return response.result;
};
