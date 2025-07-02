import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@repo/ui/lib/utils';
import LogOutButton from './LogOutButton';
import Nav from './Nav';
import { routes } from '@/shared/model/constants/routes';
import Logo from '@/shared/assets/icons/logo.png';

export default function Header({ className }: { className?: string }) {
    return (
        <header
            className={cn(
                'w-full h-14 sm:h-full flex justify-between sm:justify-center xl:justify-start sm:flex-col items-center xl:items-start gap-6 sm:py-6',
                'border-b sm:border-b-0 sm:border-r border-gray-300',
                'bg-white',
                className,
            )}
        >
            <Link href={routes.home} className='block sm:hidden'>
                <h1 className='max-w-[180px] w-full min-w-[100px] px-4 py-6'>
                    <Image src={Logo} alt='Pick & Learn' />
                </h1>
            </Link>

            <Nav className='mx-auto fixed bottom-0 z-30 sm:static shadow-primary-100 sm:shadow-none bg-white' />

            <LogOutButton
                className={cn(
                    'p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 xl:gap-3 justify-center xl:justify-start text-gray-500 hover:text-gray-900 group transition-colors sm:border-l-6 border-transparent',
                )}
            />
        </header>
    );
}
