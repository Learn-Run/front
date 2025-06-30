import { ProfileType } from '@/entities/profile/api/types';
import ProfileImage from './ProfileImage';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import ProfileNickNameGrade from './ProfileNickNameGrade';
import ProfileInfoList from './ProfileInfoList';

export default function ProfileInfoSection({
    myProfile,
    isMyProfile,
    reviewAverage,
}: {
    myProfile: ProfileType;
    isMyProfile: boolean;
    reviewAverage: number;
}) {
    if (!myProfile) return;

    return (
        <SectionWrapper className='flex flex-col items-center w-full md:flex-row md:items-start md:gap-5 mb-10'>
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
            <ProfileInfoList
                myProfile={myProfile}
                isMyProfile={isMyProfile}
                reviewAverage={reviewAverage}
            />
        </SectionWrapper>
    );
}
