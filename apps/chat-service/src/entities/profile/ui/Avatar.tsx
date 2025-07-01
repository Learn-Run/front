import Image from 'next/image';

import { cn } from '@repo/ui/lib/utils';

const SIZE_VARIANTS = {
    sm: 32,
    md: 40,
    lg: 48,
};

export default function Avatar({
    className,
    size = 'md',
    border = false,
    src,
    alt,
}: {
    size?: keyof typeof SIZE_VARIANTS;
    className?: string;
    border?: boolean;
    src?: string;
    alt: string;
}) {
    const imageSize = SIZE_VARIANTS[size];

    if (!src) {
        return (
            <div
                className={cn(
                    'rounded-full bg-gray-300 aspect-square',
                    className,
                )}
                style={{ width: imageSize, height: imageSize }}
            />
        );
    }

    return (
        <div
            className={cn(
                'rounded-full overflow-hidden bg-gray-300 aspect-square',
                { 'border-[3px] border-white': border },
                className,
            )}
            style={{ width: imageSize, height: imageSize }}
        >
            <Image
                src={src}
                alt={alt}
                width={imageSize}
                height={imageSize}
                className='rounded-full object-cover w-full h-full'
            />
        </div>
    );
}
