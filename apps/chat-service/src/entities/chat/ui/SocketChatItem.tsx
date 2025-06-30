'use client';
import { useEffect, useState } from 'react';

import { cn } from '@repo/ui/lib/utils';
import { Avatar } from '@/entities/profile/ui';
import { getMemberProfile } from '@/entities/profile/api';
import type { ProfileType } from '@/entities/profile/model/types';
import type { ChatMessageType } from '../model/types';

export default function SocketChatItem({
    chat,
    isMyMessage,
}: {
    chat: ChatMessageType;
    isMyMessage: boolean;
}) {
    const [sender, setSender] = useState<ProfileType | null>(null);

    useEffect(() => {
        if (isMyMessage) {
            const getSenderProfile = async () => {
                const profile = await getMemberProfile(chat.senderUuid);
                setSender(profile);
            };

            getSenderProfile();
        }
    }, [isMyMessage, setSender]);

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
                </div>
            </div>
        </div>
    );
}
