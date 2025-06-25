import { cn } from '@repo/ui/lib/utils';
import { ChatType } from '../model/types';
import { Avatar } from '@/entities/profile/ui';
import { MOCK_MEMBERS } from '@/entities/chatRoom/model/constants';
import { formatDate } from '@/shared/utils/dateFormat';

export default function ChatItem({
    chat,
    isMyMessage,
}: {
    chat: ChatType;
    isMyMessage: boolean;
}) {
    const sender = !isMyMessage
        ? MOCK_MEMBERS.find((item) => item.memberUuid === chat.senderUuid)
        : null;

    if (!isMyMessage && !sender) {
        return null;
    }

    return (
        <div
            className={cn('w-full flex', {
                'justify-end': isMyMessage,
                'justify-start': !isMyMessage,
            })}
        >
            <div className={cn('flex gap-x-3 items-start')}>
                {!isMyMessage && sender && (
                    <Avatar
                        src={sender.profileImage.imageUrl}
                        alt={sender.nickname}
                        className='flex-shrink-0'
                    />
                )}
                <div
                    className={cn('flex items-end gap-3', {
                        'flex-row-reverse': isMyMessage,
                    })}
                >
                    <p
                        className={cn(
                            'max-w-[240px] p-3 rounded-lg text-sm break-all grow',
                            {
                                'bg-primary-100 text-white': isMyMessage,
                                'bg-gray-100': !isMyMessage,
                            },
                        )}
                    >
                        {chat.content}
                    </p>
                    <div className='space-y-1 text-xs text-gray-500 flex-shrink-0'>
                        <p
                            className={cn(
                                isMyMessage || chat.read ? 'hidden' : '',
                            )}
                        >
                            안 읽음
                        </p>
                        <p>{formatDate(chat.sentAt, 'HH:mm')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
