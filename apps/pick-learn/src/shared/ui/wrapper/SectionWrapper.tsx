import { cn } from '@repo/ui/lib/utils';

export default function SectionWrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={cn('container mx-auto w-full max-w-[1240px]', className)}
        >
            {children}
        </section>
    );
}
