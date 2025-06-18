import { cn } from '@repo/ui/lib/utils';

export default function Label({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <span
            className={cn(
                'inline-block bg-white/20',
                'backdrop-blur-sm',
                'text-xs text-white font-medium',
                'rounded-full px-2.5 py-2',
                className,
            )}
        >
            {children}
        </span>
    );
}
