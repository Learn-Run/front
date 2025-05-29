import { cn } from '@repo/ui/lib/utils';

export default function Heading({
    children,
    className,
    align = 'left',
}: {
    children: React.ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
}) {
    return (
        <section
            className={cn(
                align === 'left' && 'text-left',
                align === 'center' && 'text-center',
                align === 'right' && 'text-right',
                'space-y-9',
                className,
            )}
        >
            {children}
        </section>
    );
}

const Title = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h1
            className={cn(
                'text-5xl font-medium leading-[110%] tracking-[-3px]',
                className,
            )}
        >
            {children}
        </h1>
    );
};

const SubTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h2 className={cn('text-xl text-gray-800', className)}>{children}</h2>
    );
};

Heading.Title = Title;
Heading.SubTitle = SubTitle;
