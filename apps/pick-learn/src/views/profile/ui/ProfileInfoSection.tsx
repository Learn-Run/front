import SharedButton from './SharedButton';
import ProfileImage from './ProfileImage';
import { ProfileType } from '@/entities/profile/api/types';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function ProfileInfoSection({
    myProfile,
}: {
    myProfile: ProfileType;
}) {
    if (!myProfile) return;
    return (
        <SectionWrapper className='flex flex-col items-start justify-start'>
            <div className='flex flex-col items-center'>
                <ProfileImage profileImage={myProfile.profileImage} />
            </div>
            <span className='text-2xl font-extrabold mt-3'>
                @{myProfile.nickname}
            </span>
            <SharedButton />
        </SectionWrapper>
    );
}
