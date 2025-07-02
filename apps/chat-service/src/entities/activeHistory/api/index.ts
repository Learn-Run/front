import { fetchData } from '@/shared/api/instance';
import { ActiveHistoryCountType } from './types';
import { services } from '@/shared/api/constants';

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
