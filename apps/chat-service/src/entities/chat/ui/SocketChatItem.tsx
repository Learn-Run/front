'use client';
import { useEffect, useState } from 'react';

import { cn } from '@repo/ui/lib/utils';
import { Avatar } from '@/entities/profile/ui';
import { getMemberProfile } from '@/entities/profile/api';
import type { ProfileType } from '@/entities/profile/model/types';
import type { ChatMessageType } from '../model/types';
import { S3_BASE_URL } from '@/shared/model/constants/s3';
import { formatDate } from '@/shared/utils/dateFormat';

export default function SocketChatItem({
    chat,
    isMyMessage,
}: {
    chat: ChatMessageType;
    isMyMessage: boolean;
}) {
    const [sender, setSender] = useState<ProfileType | null>(null);

    const fallbackImage = S3_BASE_URL + '/baseprofile.webp';
    const imageUrl = sender?.profileImage?.imageUrl || fallbackImage;
    const alt = sender?.profileImage?.alt || sender?.nickname + '프로필 이미지';

    useEffect(() => {
        if (!isMyMessage) {
            const getSenderProfile = async () => {
                const profile = await getMemberProfile(chat.senderUuid);
                setSender(profile);
            };

            getSenderProfile();
        }
    }, [isMyMessage, setSender, chat.senderUuid]);

    if (!isMyMessage && sender === null) {
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
                {!isMyMessage && sender && sender.profileImage?.imageUrl && (
                    <Avatar
                        src={imageUrl}
                        alt={alt}
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
                        {/* <p
                            className={cn(
                                isMyMessage || chat.read ? 'hidden' : '',
                            )}
                        >
                            안 읽음
                        </p> */}
                        <p>{formatDate(chat.sentAt, 'MM-DD HH:mm')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
