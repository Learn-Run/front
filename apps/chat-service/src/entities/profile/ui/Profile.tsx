import { cn } from '@repo/ui/lib/utils';
import { Avatar } from '@/entities/profile/ui';
import { poppins } from '@/shared/assets/fonts';
import { ProfileType } from '../model/types';

export default function Profile({
    profile,
    className,
    children,
}: {
    profile: ProfileType;
    className?: string;
    children?: React.ReactNode;
}) {
    const fallbackImage =
        process.env.NEXT_PUBLIC_S3_BASE_URL + '/baseprofile.webp';
    const imageUrl = profile.profileImage.imageUrl || fallbackImage;
    const alt =
        profile.profileImage.alt || profile.profileImage.alt + '프로필 이미지';

    return (
        <div
            className={cn(
                'flex gap-x-3 justify-between items-center min-w-[210px] w-full',
                className,
            )}
        >
            <Avatar src={imageUrl} alt={`${alt} 프로필 이미지`} />

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
                    {profile.grade.name}
                </p>
            </div>
            {children}
        </div>
    );
}
