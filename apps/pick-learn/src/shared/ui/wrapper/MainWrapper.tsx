import { cn } from '@repo/ui/lib/utils';
import React from 'react';

export default function MainWrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main className={cn('min-h-[calc(100vh-104px)]', className)}>
            {children}
        </main>
    );
}
