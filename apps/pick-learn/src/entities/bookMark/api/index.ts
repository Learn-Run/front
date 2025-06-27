import { fetchData } from '@/shared/api/instance';
import { BookMarkListType } from './types';
import { services } from '@/shared/api/constants';

export const getBookMarkList = async (
    page: number,
): Promise<BookMarkListType> => {
    const response = await fetchData.get<BookMarkListType>(
        `${services.bookMark}/api/v1/bookmark/list?page=${page}`,
        {
            requireAuth: true,
        },
    );

    return response.result;
};
