import { MyActiveMenu, ActivityTabWrapper } from '.';
import { MyActivePostListType } from '@/entities/activeHistory/api/types';
import { BookMarkListType } from '@/entities/bookMark/api/types';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function ActiveHistorySection({
    paginationParams,
    memberUuid,
    myActiveList,
    bookMarkList,
    isMyProfile,
}: {
    paginationParams: { type?: string; page?: number; size?: number };
    memberUuid: string;
    myActiveList?: MyActivePostListType;
    bookMarkList?: BookMarkListType;
    isMyProfile: boolean;
}) {
    return (
        <SectionWrapper className='flex flex-col px-4 gap-x-5 md:flex-row border-t-2 border-gray-400 pt-10'>
            <MyActiveMenu
                paginationParams={paginationParams}
                memberUuid={memberUuid}
                isMyProfile={isMyProfile}
            />
            <ActivityTabWrapper
                myActiveHistoryList={myActiveList}
                paginationParams={paginationParams}
                memberUuid={memberUuid}
                bookMarkList={bookMarkList}
            />
        </SectionWrapper>
    );
}
