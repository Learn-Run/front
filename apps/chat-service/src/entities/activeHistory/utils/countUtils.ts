import { ActiveHistoryCountType } from '@/entities/activeHistory/api/types';

export const getCountForType = (
    type: string,
    activeHistoryCount: ActiveHistoryCountType,
) => {
    switch (type) {
        case 'POST':
            return activeHistoryCount.postCount;
        case 'COMMENT':
            return activeHistoryCount.commentCount;
        default:
            return 0;
    }
};
