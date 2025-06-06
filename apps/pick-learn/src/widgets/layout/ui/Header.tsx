import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';
import Logo from '@/shared/assets/icons/Logo';
import Nav from './Nav';
import LogIn from '@/shared/assets/icons/LogIn';
import { cn } from '@repo/ui/lib/utils';
import { routes } from '@/shared/constants/routes';

export default function Header() {
    return (
        <header
            className={cn(
                'fixed top-0 left-0 z-50 w-full bg-white backdrop-blur-xs',
            )}
        >
            <div className='grid grid-cols-12 items-center container mx-auto px-4 2xl:px-0 h-[5rem]'>
                <Link
                    href='/'
                    className='col-span-6 md:col-span-2 xl:col-span-3'
                >
                    <Logo />
                </Link>
                <Nav className='hidden md:block col-span-6 md:col-span-8 xl:col-span-6' />
                <div className='col-span-6 md:col-span-2 xl:col-span-3 flex justify-end items-center gap-2'>
                    <Button variant='text' className='w-fit hidden md:block'>
                        log in
                    </Button>
                    <Button
                        type='button'
                        variant='outline'
                        className='w-fit hidden md:block border-primary-100 text-primary-100'
                        asChild
                    >
                        <Link href={routes.signUp}>Register</Link>
                    </Button>
                    <Link href='/login' className='w-fit md:hidden'>
                        <LogIn />
                    </Link>
                </div>
            </div>
        </header>
    );
}
