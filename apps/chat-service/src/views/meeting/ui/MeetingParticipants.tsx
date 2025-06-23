import Avatar from '@/entities/profile/ui/Avatar';
import { cn } from '@repo/ui/lib/utils';

export default function MeetingParticipants({
    participants,
}: {
    participants: { memberUuid: string; name?: string; profileUrl?: string }[];
}) {
    return (
        <ul className='flex'>
            {participants.slice(0, 4).map((participant, idx) => (
                <li
                    key={participant.memberUuid}
                    className={cn('relative', { '-ml-4': idx !== 0 })}
                    style={{
                        zIndex: 10 + idx,
                    }}
                >
                    <Avatar
                        src={participant.profileUrl}
                        alt={`${participant.name} 프로필 이미지`}
                        border
                    />
                </li>
            ))}
            {participants.length > 4 && (
                <li
                    className='relative -ml-4'
                    style={{
                        zIndex: 15,
                    }}
                >
                    <div className='rounded-full w-10 h-10 bg-secondary-100 border-[3px] border-white flex items-center justify-center text-xs text-primary-100 font-semibold'>
                        +{participants.length - 4}
                    </div>
                </li>
            )}
        </ul>
    );
}
