import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';
import { getProfile } from '@/entities/profile/api';
import { getMyActivePostList } from '@/entities/activeHistory/api';
import { MainWrapper, Pagination } from '@/shared/ui';
import ProfileInfoSection from '@/views/profile/ui/ProfileInfoSection';
import ActiveHistorySection from '@/views/profile/ui/ActiveHistorySection';

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
    const session = await getServerSession(options);
    const myMemberUuid = session?.user?.memberUuid;
    const isMyProfile = myMemberUuid === memberUuid;

    return (
        <MainWrapper className='bg-gradient-to-b from-secondary-100 to-[#f7f2f3] pt-40'>
            <ProfileInfoSection
                myProfile={myProfile}
                isMyProfile={isMyProfile}
            />
            <ActiveHistorySection
                paginationParams={paginationParams}
                memberUuid={memberUuid}
                myActiveList={myActiveList}
            />

            <Pagination totalPage={myActiveList.totalPages} />
        </MainWrapper>
    );
}
