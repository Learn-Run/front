import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';
import Logo from '@/shared/assets/icons/Logo';
import Nav from './Nav';
import LogIn from '@/shared/assets/icons/LogIn';

export default function Header() {
    return (
        <header className='grid grid-cols-12 items-center container mx-auto py-5 px-5 justify-between'>
            <Link href='/' className='col-span-6 md:col-span-3 '>
                <Logo />
            </Link>
            <Nav className='hidden md:block col-span-6 justify-self-center' />
            <div className='col-span-6 md:col-span-3 flex justify-end items-center gap-2'>
                <Button variant='text' className='w-fit hidden md:block'>
                    log in
                </Button>
                <Button
                    variant='outline'
                    className='w-fit hidden md:block border-primary-100 text-primary-100'
                >
                    Register
                </Button>
                <Link href='/login'>
                    <LogIn className='md:hidden' />
                </Link>
            </div>
        </header>
    );
}
