import { poppins } from '@/shared/assets/fonts';
import { cn } from '@repo/ui/lib/utils';

type AuthHeadingProps = { children?: React.ReactNode; className?: string };

export default function AuthHeading({ children, className }: AuthHeadingProps) {
    return (
        <section
            data-slot='auth-heading'
            className={cn('text-center', className)}
        >
            {children}
        </section>
    );
}

function Title({ children, className }: AuthHeadingProps) {
    return (
        <h3
            data-slot='auth-heading-title'
            className={cn(
                poppins.className,
                'font-bold text-3xl text-gray-900 opacity-80 leading-[38px]',
                className,
            )}
        >
            {children}
        </h3>
    );
}

function Desc({ children, className }: AuthHeadingProps) {
    return (
        <p
            data-slot='auth-heading-description'
            className={cn(
                poppins.className,
                'font-medium text-sm text-gray-900 opacity-40 leading-[20px]',
                className,
            )}
        >
            {children}
        </p>
    );
}

AuthHeading.Title = Title;
AuthHeading.Desc = Desc;
