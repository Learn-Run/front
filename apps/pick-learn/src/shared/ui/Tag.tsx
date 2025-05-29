import { cn } from '@repo/ui/lib/utils';

export default function Tag({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'border border-gray-500 rounded-lg w-fit px-3 py-1.5 font-semibold text-gray-500',
                className,
            )}
        >
            {children}
        </div>
    );
}
