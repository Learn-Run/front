import ProfileImage from './ProfileImage';
import { ProfileType } from '@/entities/profile/api/types';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import SelfIntroduction from './SelfIntroduction';

export default function ProfileInfoSection({
    myProfile,
}: {
    myProfile: ProfileType;
}) {
    if (!myProfile) return;
    return (
        <SectionWrapper className='flex flex-col'>
            <div className='flex items-start gap-5'>
                <ProfileImage profileImage={myProfile.profileImage} />
                <SelfIntroduction
                    selfIntroduction={myProfile.selfIntroduction}
                />
            </div>
            <span className='text-2xl font-extrabold mt-3 mb-8'>
                @{myProfile.nickname}
            </span>
        </SectionWrapper>
    );
}
