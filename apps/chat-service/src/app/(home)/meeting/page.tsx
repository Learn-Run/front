import Link from 'next/link';

import { routes } from '@/shared/model/constants/routes';
import { MEETING_DATA } from '@/entities/meeting/model/constants';

export default async function MeetingPage() {
    const meetingData = MEETING_DATA;

    return (
        <main className='px-4 py-6'>
            <ul>
                {meetingData.map((meeting) => (
                    <li key={meeting.meetingUuid} className='py-4'>
                        <Link href={`${routes.meeting}/${meeting.meetingUuid}`}>
                            {meeting.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
