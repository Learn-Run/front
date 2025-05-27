import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';
import Logo from '@/shared/assets/icons/Logo';
import Nav from './Nav';
import LogIn from '@/shared/assets/icons/LogIn';

export default function Header() {
    return (
        <header className='flex items-center container mx-auto py-5 px-5 justify-between'>
            <Link href='/'>
                <Logo />
            </Link>
            <Nav className='hidden md:block' />
            <div className='flex items-center gap-2'>
                <Button variant='text' className='w-fit hidden md:block'>
                    log in
                </Button>
                <Button variant='outline' className='w-fit hidden md:block'>
                    Register
                </Button>
                <Link href='/login'>
                    <LogIn className='md:hidden' />
                </Link>
            </div>
        </header>
    );
}
