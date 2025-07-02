'use client';
import LogOut from '@/shared/assets/icons/LogOut';
import { cn } from '@repo/ui/lib/utils';

export default function LogOutButton({ className }: { className?: string }) {
    const handleClickLogOut = () => {
        // Add your logout logic here
        console.log('Logging out...');
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
