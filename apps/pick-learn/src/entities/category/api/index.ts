'use server';

import { MainCategoryType } from './types';

//FIXME:api 연결 시에 수정 필요 (예외처리 추가 예정)
export const getMainCategories = async (): Promise<MainCategoryType[]> => {
    const response = await fetch(
        `${process.env.BASE_API_URL}/community-service/api/v1/category/main`,
    );
    const data = await response.json();
    console.log(data);
    return data.result;
};
