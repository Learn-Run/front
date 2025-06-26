import { ProfileType } from '@/entities/profile/api/types';
import SelfIntroduction from '@/features/profile/ui/SelfIntroduction';
import MyCategoryList from './MyCategoryList';
import EditButton from '@/shared/ui/EditButton';
import { cn } from '@repo/ui/lib/utils';

export default function ProfileInfoList({
    myProfile,
    isMyProfile,
    className,
}: {
    myProfile: ProfileType;
    isMyProfile: boolean;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'flex flex-col w-full border-2 rounded-xl bg-white p-5 gap-5',
                className,
            )}
        >
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>카테고리</h3>
                {isMyProfile && (
                    <EditButton
                        selfintroduction={myProfile.selfIntroduction}
                        categoryList={myProfile.categoryList}
                    />
                )}
            </div>
            <MyCategoryList categoryList={myProfile.categoryList} />

            <SelfIntroduction
                selfIntroduction={myProfile.selfIntroduction}
                isMyProfile={isMyProfile}
            />
        </div>
    );
}
