import { cn } from '@repo/ui/src/lib/utils';
import { poppins } from '../assets/fonts';

export default function Heading({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return <section className={cn('p-6', className)}>{children}</section>;
}

function Title({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <h3
            className={cn(
                'text-gray-900 font-medium text-xl',
                poppins.className,
                className,
            )}
        >
            {children}
        </h3>
    );
}

function Description({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return <p className={cn(className)}>{children}</p>;
}

Heading.Title = Title;
Heading.Description = Description;
