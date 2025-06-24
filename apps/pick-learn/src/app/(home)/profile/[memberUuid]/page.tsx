import { getProfile } from '@/entities/profile/api';
import { getMyActivePostList } from '@/entities/activeHistory/api';
import { MainWrapper, Pagination } from '@/shared/ui';
import ProfileInfoSection from '@/views/profile/ui/ProfileInfoSection';
import ActivityTabWrapper from '@/views/profile/ui/ActivityTabWrapper';
import MyActiveMenu from '@/views/profile/ui/MyActiveMenu';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export type MyActivePageProps = {
    searchParams: Promise<{ type?: string; page?: number; size?: number }>;
    params: Promise<{ memberUuid: string }>;
};

export default async function ProfilePage({
    searchParams,
    params,
}: MyActivePageProps) {
    const paginationParams = await searchParams;
    const { memberUuid } = await params;

    const zeroPage = paginationParams.page
        ? Math.floor(paginationParams.page - 1)
        : 0;

    const myProfile = await getProfile(memberUuid);

    const myActiveList = await getMyActivePostList({
        ...paginationParams,
        page: zeroPage,
        memberUuid,
    });

    return (
        <MainWrapper className='bg-gradient-to-b from-secondary-100 to-[#f7f2f3] pt-40'>
            <ProfileInfoSection myProfile={myProfile} />
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

            <Pagination totalPage={myActiveList.totalPages} />
        </MainWrapper>
    );
}
