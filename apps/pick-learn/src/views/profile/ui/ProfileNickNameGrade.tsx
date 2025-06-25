import { ProfileType } from '@/entities/profile/api/types';
import ProfileNickNameChangeButton from '@/features/profile/ui/ProfileNickNameChangeButton';
import { jost } from '@/shared/assets/fonts';
import { cn } from '@repo/ui/lib/utils';

export default function ProfileNickNameGrade({
    myProfile,
    isMyProfile,
}: {
    myProfile: ProfileType;
    isMyProfile: boolean;
}) {
    if (isMyProfile)
        return (
            <div className='flex items-center justify-between text-2xl font-extrabold mt-3 mb-8 w-full md:max-w-[230px]'>
                <p className='flex items-center gap-x-2'>
                    @{myProfile.nickname}{' '}
                    <span
                        className={cn(
                            jost.className,
                            'text-xs font-medium leading-none place-items-end-safe',
                        )}
                        style={{ color: myProfile.grade?.color }}
                    >
                        {myProfile.grade.name}
                    </span>
                </p>

                <ProfileNickNameChangeButton />
            </div>
        );

    return (
        <div className='flex items-center justify-between text-2xl font-extrabold mt-3 mb-8 w-full md:max-w-[230px]'>
            <p className='flex items-center gap-x-2'>
                @{myProfile.nickname}{' '}
                <span
                    className={cn(
                        jost.className,
                        'text-xs font-medium leading-none place-items-end-safe',
                    )}
                    style={{ color: myProfile.grade?.color }}
                >
                    {myProfile.grade.name}
                </span>
            </p>
        </div>
    );
}
