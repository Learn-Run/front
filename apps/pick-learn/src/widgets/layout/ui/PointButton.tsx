'use client';
import Link from 'next/link';
import { CircleDollarSign } from 'lucide-react';

import { routes } from '@/shared/model/constants/routes';
import { cn } from '@repo/ui/lib/utils';
import { usePathname } from 'next/navigation';

export default function PointButton() {
    const pathname = usePathname();
    const isActive = pathname === routes.point;
    return (
        <Link className='px-2' href={routes.point}>
            <CircleDollarSign
                className={cn(
                    'text-gray-500 w-8 h-8 hover:text-point-blue-200',
                    isActive && 'text-point-blue-200',
                )}
                strokeWidth={1.5}
            />
        </Link>
    );
}
