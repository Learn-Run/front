import ProfileImage from './ProfileImage';
import { ProfileType } from '@/entities/profile/api/types';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import ProfileNickNameGrade from './ProfileNickNameGrade';
import SelfIntroduction from '@/features/profile/ui/SelfIntroduction';
import MyCategoryList from './MyCategoryList';

export default function ProfileInfoSection({
    myProfile,
    isMyProfile,
}: {
    myProfile: ProfileType;
    isMyProfile: boolean;
}) {
    if (!myProfile) return;
    return (
        <SectionWrapper className='flex flex-col items-center w-full md:flex-row md:items-start md:gap-5'>
            <div className='flex-shrink-0'>
                <ProfileImage
                    profileImage={myProfile.profileImage}
                    isMyProfile={isMyProfile}
                />
                <ProfileNickNameGrade
                    myProfile={myProfile}
                    isMyProfile={isMyProfile}
                />
            </div>
            <div className='flex flex-col w-full border-2 bg-white rounded-xl p-5 gap-5'>
                <MyCategoryList categoryList={myProfile.categoryList} />

                <SelfIntroduction
                    selfIntroduction={myProfile.selfIntroduction}
                    className='mb-10 md:mb-0 md:mt-0 '
                    isMyProfile={isMyProfile}
                />
            </div>
        </SectionWrapper>
    );
}
