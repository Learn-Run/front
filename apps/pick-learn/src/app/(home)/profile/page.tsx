import { MainWrapper } from '@/shared/ui';
import { getMyProfile } from '@/entities/profile/api';
import ProfileInfoSection from '@/views/profile/ui/ProfileInfoSection';
import ProfileMenuSection from '@/views/profile/ui/ProfileMenuSection';

export default async function page() {
    const myProfile = await getMyProfile();
    console.log('🚀 ~ page ~ myProfile:', myProfile);
    return (
        <MainWrapper className='bg-gradient-to-b from-secondary-100 to-[#f7f2f3] pt-[8rem]'>
            <ProfileInfoSection myProfile={myProfile} />
            <ProfileMenuSection />
        </MainWrapper>
    );
}
