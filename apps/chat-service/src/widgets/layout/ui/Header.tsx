import Link from 'next/link';

import { cn } from '@repo/ui/src/lib/utils';
import LogOutButton from './LogOutButton';
import Nav from './Nav';
import { routes } from '@/shared/model/routes';
import Logo from '@/shared/assets/icons/logo.png';
import Image from 'next/image';

export default function Header({ className }: { className?: string }) {
    return (
        <header
            className={cn(
                'w-full h-20 sm:h-full flex justify-between sm:flex-col items-center sm:items-start gap-6 sm:py-6',
                'border-b sm:border-b-0 sm:border-r border-gray-300',
                'bg-white',
                className,
            )}
        >
            <Link href={routes.home}>
                <h1 className='max-w-[150px] w-full min-w-[100px] px-4 py-6'>
                    <Image src={Logo} alt='Pick & Learn' />
                </h1>
            </Link>

            <Nav className='mx-auto fixed bottom-0 z-50 sm:static shadow-primary-100 sm:shadow-none bg-white' />

            <LogOutButton
                className={cn(
                    'px-4 py-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-500 hover:text-gray-900 group transition-colors',
                )}
            />
        </header>
    );
}
