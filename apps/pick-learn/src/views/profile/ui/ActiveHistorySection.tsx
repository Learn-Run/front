import { MyActiveMenu, ActivityTabWrapper } from '.';
import { MyActivePostListType } from '@/entities/activeHistory/api/types';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function ActiveHistorySection({
    paginationParams,
    memberUuid,
    myActiveList,
}: {
    paginationParams: { type?: string; page?: number; size?: number };
    memberUuid: string;
    myActiveList: MyActivePostListType;
}) {
    return (
        <SectionWrapper className='flex flex-col md:flex-row gap-x-5 border-t-2 border-gray-400 pt-10'>
            <MyActiveMenu
                paginationParams={paginationParams}
                memberUuid={memberUuid}
            />
            <ActivityTabWrapper
                myActiveHistoryList={myActiveList}
                paginationParams={paginationParams}
                memberUuid={memberUuid}
            />
        </SectionWrapper>
    );
}
