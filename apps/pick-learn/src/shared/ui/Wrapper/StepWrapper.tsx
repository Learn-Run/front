import { cn } from '@repo/ui/lib/utils';

export default function StepWrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={cn('w-full py-[5rem] bg-gray-100 md:px-0', className)}
        >
            {children}
        </section>
    );
}
