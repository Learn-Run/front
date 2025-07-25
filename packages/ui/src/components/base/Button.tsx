import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all disabled:bg-gray-300 disabled:text-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    'bg-primary-100 text-white shadow-xs hover:bg-primary-100/90 cursor-pointer',
                outline:
                    'border border-gray-400 text-gray-800 shadow-xs hover:bg-primary-100/10 active:bg-primary-100/10 cursor-pointer',
                text: 'text-gray-700 hover:bg-primary-100/10 active:bg-primary-100/10 cursor-pointer',
            },
            size: {
                default: 'px-3 py-[6px] has-[>svg]:px-3 w-full rounded-lg',
                sm: 'rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
                lg: 'rounded-lg px-6 has-[>svg]:px-4',
                icon: 'size-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot='button'
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

Button.displayName = 'Button';

export { Button, buttonVariants };
