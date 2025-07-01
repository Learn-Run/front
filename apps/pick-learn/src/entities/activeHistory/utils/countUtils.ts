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
        case 'REVIEW_WRITE':
            return activeHistoryCount.reviewWriteCount;
        case 'REVIEW_RECEIVED':
            return activeHistoryCount.reviewReceivedCount;
        default:
            return 0;
    }
};
