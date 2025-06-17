import { MEETING_DATA } from '@/app/(home)/meeting/page';
import Heading from '@/shared/ui/Heading';
import { dateFormat } from '@/shared/utils/dateFormat';
import MeetingParticipants from './MeetingParticipants';
import { Profile } from '@/entities/profile/ui';
import VerticalEllipsis from '@/shared/assets/icons/VerticalEllipsis';
import { PROFILE } from '@/entities/profile/model/constants';

export default function MeetingDetailHeading({
    meetingData,
}: {
    meetingData: (typeof MEETING_DATA)[number];
}) {
    const profile = PROFILE;

    return (
        <Heading className='p-6 bg-white border-b border-gray-300 pb-4 flex flex-wrap gap-4 justify-between items-center'>
            <div>
                <Heading.Title className='pb-2.5'>
                    {meetingData?.title}
                </Heading.Title>
                <Heading.Description className='text-gray-500'>
                    {dateFormat(meetingData.createdAt)}
                </Heading.Description>
            </div>

            <div className='flex items-center gap-4'>
                <MeetingParticipants participants={meetingData.participants} />

                <Profile
                    profile={profile}
                    className='hidden lg:flex bg-gray-200 rounded-full p-3 items-center gap-2'
                >
                    <button>
                        <VerticalEllipsis className='text-tertiary-100' />
                    </button>
                </Profile>
            </div>
        </Heading>
    );
}
