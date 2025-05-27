import Image from 'next/image';

import { cn } from '@repo/ui/lib/utils';
import logo from '@/shared/assets/icons/logo.png';

export default function Logo({ className }: { className?: string }) {
    return (
        <h1
            className={cn(
                'relative w-full min-w-[120px] max-w-[150px] 2xl:max-w-[200px] h-[50px]',
                className,
            )}
        >
            <Image
                src={logo.src}
                alt='logo'
                fill
                className='object-contain w-full'
                sizes='100%'
            />
        </h1>
    );
}
