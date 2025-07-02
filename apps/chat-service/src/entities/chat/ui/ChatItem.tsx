'use client';
import { useEffect, useState } from 'react';

import { cn } from '@repo/ui/lib/utils';
import { Avatar } from '@/entities/profile/ui';
import { formatDate } from '@/shared/utils/dateFormat';
import { ChatRoomContentType } from '@/entities/chatRoom/api/types';
import { getMemberProfile } from '@/entities/profile/api';
import { ProfileType } from '@/entities/profile/model/types';
import { S3_BASE_URL } from '@/shared/model/constants/s3';

export default function ChatItem({
    chat,
    isMyMessage,
}: {
    chat: ChatRoomContentType;
    isMyMessage: boolean;
}) {
    const [sender, setSender] = useState<ProfileType | null>(null);

    const fallbackImage = S3_BASE_URL + 'baseprofile.webp';
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
    }, [isMyMessage, chat.senderUuid]);

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
