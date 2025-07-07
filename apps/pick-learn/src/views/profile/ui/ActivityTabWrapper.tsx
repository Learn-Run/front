import { MyActivePostListType } from '@/entities/activeHistory/api/types';
import { MyQuestionList, MyReviewList } from '@/entities/activeHistory/ui';
import MyBookmarkList from './MyBookmarkList';
import { BookMarkListType } from '@/entities/bookMark/api/types';
import { EmptySection } from '@/features/profile/ui';
import MyCommentList from '@/entities/activeHistory/ui/MyCommentList';

type ActivityTabWrapperProps = {
    myActiveHistoryList?: MyActivePostListType;
    paginationParams: {
        type?: string;
        page?: number;
        size?: number;
    };
    memberUuid: string;
    bookMarkList?: BookMarkListType;
};

export default function ActivityTabWrapper({
    myActiveHistoryList,
    paginationParams,
    bookMarkList,
}: ActivityTabWrapperProps) {
    if (myActiveHistoryList?.posts.length === 0) return <EmptySection />;

    if (!paginationParams.type)
        return <MyQuestionList myActiveHistoryList={myActiveHistoryList} />;

    if (paginationParams.type === 'POST') {
        return <MyQuestionList myActiveHistoryList={myActiveHistoryList} />;
    }

    if (paginationParams.type === 'COMMENT') {
        return <MyCommentList myActiveHistoryList={myActiveHistoryList} />;
    }

    if (
        paginationParams.type === 'REVIEW_RECEIVED' ||
        paginationParams.type === 'REVIEW_WRITE'
    ) {
        return <MyReviewList myActiveHistoryList={myActiveHistoryList} />;
    }

    if (paginationParams.type === 'BOOKMARK') {
        if (bookMarkList?.postUuid.length === 0) return <EmptySection />;
        return <MyBookmarkList bookMarkList={bookMarkList} />;
    }

    return <EmptySection />;
}
