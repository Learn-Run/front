import { cn } from '@repo/ui/src/lib/utils';
import { Avatar } from '@/entities/profile/ui';
import { poppins } from '@/shared/assets/fonts';
import { ProfileType } from '../model/types';

export default function Profile({
    profile,
    className,
    children,
}: {
    profile?: ProfileType;
    className?: string;
    children?: React.ReactNode;
}) {
    if (!profile) return;

    return (
        <div
            className={cn(
                'flex gap-x-3 justify-between items-center min-w-[210px] w-full',
                className,
            )}
        >
            <Avatar
                src={profile.profileImage.imageUrl}
                alt={`${profile.nickname} 프로필 이미지`}
            />

            <div className='space-y-1 flex-grow'>
                <p
                    className={cn(
                        poppins.className,
                        'text-gray-900 font-medium inline-block text-sm',
                    )}
                >
                    {profile.nickname}
                </p>
                <p
                    className={cn(
                        poppins.className,
                        'text-gray-500 font-medium text-xs',
                    )}
                >
                    {profile.gradeName}
                </p>
            </div>
            {children}
        </div>
    );
}
