import { MyActivePostListType } from '@/entities/activeHistory/api/types';
import { MyQuestionList, MyReviewList } from '@/entities/activeHistory/ui';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import MyBookmarkList from './MyBookmarkList';
import { BookMarkListType } from '@/entities/bookMark/api/types';

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
    if (!paginationParams.type) return;

    if (!paginationParams.type)
        return <MyReviewList myActiveHistoryList={myActiveHistoryList} />;

    if (paginationParams.type === 'POST') {
        return <MyQuestionList myActiveHistoryList={myActiveHistoryList} />;
    }

    if (paginationParams.type === 'COMMENT' && !myActiveHistoryList) {
        return <div>comment</div>;
    }

    if (
        paginationParams.type === 'REVIEW_RECEIVED' ||
        paginationParams.type === 'REVIEW_WRITE'
    ) {
        return <MyReviewList myActiveHistoryList={myActiveHistoryList} />;
    }

    if (paginationParams.type === 'BOOKMARK') {
        return <MyBookmarkList bookMarkList={bookMarkList} />;
    }

    return (
        <SectionWrapper className='flex items-center justify-center '>
            <p className='text-gray-700'>게시물이 없습니다</p>
        </SectionWrapper>
    );
}
