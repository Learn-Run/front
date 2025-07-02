'use client';
import { signOut } from 'next-auth/react';

import LogOut from '@/shared/assets/icons/LogOut';
import { cn } from '@repo/ui/lib/utils';
import { useAlert } from '@/shared/model/hooks/useAlert';

export default function LogOutButton({ className }: { className?: string }) {
    const alert = useAlert();

    const handleClickLogOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log('🚀 ~ handleClickLogOut ~ error:', error);
            alert.error(
                '로그아웃 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요',
            );
        }
    };

    return (
        <button
            onClick={handleClickLogOut}
            className={cn('cursor-pointer', className)}
        >
            <LogOut className='text-gray-500 group-hover:text-gray-900 transition-colors min-w-6 min-h-6' />
            <span className='hidden md:hidden xl:block'>Log Out</span>
        </button>
    );
}
