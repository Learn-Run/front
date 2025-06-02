'use server';

import { MainCategoryType } from './types';

export const getMainCategories = async (): Promise<MainCategoryType[]> => {
    const response = await fetch(
        `${process.env.BASE_API_URL}/community-service/api/v1/category/main`,
    );
    const data = await response.json();
    console.log(data);
    return data.result;
};
