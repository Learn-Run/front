import Image from 'next/image';

import { cn } from '@repo/ui/src/lib/utils';

export default function Avatar({
    className,
    size = 'md',
    border = false,
    src,
    alt,
}: {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    border?: boolean;
    src?: string;
    alt: string;
}) {
    if (!src) {
        return (
            <div
                className={cn(
                    'rounded-full bg-gray-300',
                    { 'w-8 h-8': size === 'sm' },
                    { 'w-10 h-10': size === 'md' },
                    { 'w-12 h-12': size === 'lg' },
                    className,
                )}
            />
        );
    }

    return (
        <div
            className={cn(
                'rounded-full overflow-hidden relative bg-gray-300',
                { 'border-[3px] border-white': border },
                { 'w-8 h-8': size === 'sm' },
                { 'w-10 h-10': size === 'md' },
                { 'w-12 h-12': size === 'lg' },
                className,
            )}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes='100%'
                className='rounded-full'
            />
        </div>
    );
}
