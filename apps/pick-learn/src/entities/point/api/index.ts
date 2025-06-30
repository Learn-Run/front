import { fetchData } from '@/shared/api/instance';
import { PointListType } from './types';
import { services } from '@/shared/api/constants';

export const getPointList = async () => {
    const response = await fetchData.get<PointListType[]>(
        `${services.point}/api/v1/point-charge/info/all`,
    );
    return response.result;
};
