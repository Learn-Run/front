import { MEETING_DATA } from '@/entities/meeting/model/constants';
import Heading from '@/shared/ui/Heading';
import MeetingDetailHeading from '@/views/meeting/ui/MeetingDetailHeading';

export default async function MeetingDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const meetingData = MEETING_DATA.find(
        (meeting) => meeting.meetingUuid === id,
    );

    if (!meetingData) {
        return (
            <main>
                <Heading>
                    <Heading.Title className='text-2xl font-bold'>
                        요청하신 화상 채팅방 정보를 찾을 수 없습니다.
                    </Heading.Title>
                    <Heading.Description className='text-gray-500'>
                        요청하신 화상 채팅방이 존재하지 않습니다. 방 정보가
                        올바른지 다시 한 번 확인해 주세요.
                    </Heading.Description>
                </Heading>
            </main>
        );
    }

    return (
        <main className='bg-gray-100 w-full h-dvh'>
            <MeetingDetailHeading meetingData={meetingData} />
        </main>
    );
}
