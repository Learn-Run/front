'use client';

import LogOut from '@/shared/assets/icons/LogOut';

export default function LogOutButton({ className }: { className?: string }) {
    const handleClickLogOut = () => {
        // Add your logout logic here
        console.log('Logging out...');
    };

    return (
        <button onClick={handleClickLogOut} className={className}>
            <LogOut className='text-gray-500 group-hover:text-gray-900 transition-colors w-6 h-6' />
            <span className='hidden sm:inline'>Log Out</span>
        </button>
    );
}
