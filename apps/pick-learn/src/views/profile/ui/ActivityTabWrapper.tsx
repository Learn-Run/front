import { MyActivePostListType } from '@/entities/activeHistory/api/types';
import MyQuestionList from '@/entities/activeHistory/ui/MyQuestionList';
import MyReviewList from '@/entities/activeHistory/ui/MyReviewList';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

type ActivityTabWrapperProps = {
    myActiveHistoryList: MyActivePostListType;
    paginationParams: {
        type?: string;
        page?: number;
        size?: number;
    };
    memberUuid: string;
};

export default function ActivityTabWrapper({
    myActiveHistoryList,
    paginationParams,
}: ActivityTabWrapperProps) {
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

    return (
        <SectionWrapper className='flex items-center justify-center '>
            <p className='text-gray-700'>게시물이 없습니다</p>
        </SectionWrapper>
    );
}
