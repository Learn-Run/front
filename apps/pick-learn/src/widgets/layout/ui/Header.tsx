import Link from 'next/link';

import Logo from '@/shared/assets/icons/Logo';
import Nav from './Nav';
import { cn } from '@repo/ui/lib/utils';
import SignButton from './SignButton';

export default function Header() {
    return (
        <header className={cn('fixed md:top-10 z-50 w-full')}>
            <div className='grid grid-cols-12 items-center container mx-auto px-5 sm:px-10 h-[5rem] bg-white rounded-full max-w-[1320px] shadow-lg'>
                <Link
                    href='/'
                    className='col-span-6 md:col-span-2 xl:col-span-3'
                >
                    <Logo />
                </Link>
                <Nav className='hidden md:block col-span-6 md:col-span-8 xl:col-span-6' />
                <SignButton />
            </div>
        </header>
    );
}
