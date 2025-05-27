import { cn } from '../../../lib/utils';
import { InputProps } from './types';

export default function Input({
    label,
    required,
    className,
    error,
    children,
    ...props
}: InputProps) {
    return (
        <div className={cn('relative w-full', className)}>
            <input
                {...props}
                placeholder=' '
                className={cn(
                    'file:text-foreground w-full placeholder:text-muted-foreground selection:bg-secondary-300 selection:text-primary-foreground dark:bg-input/30',
                    'flex w-full min-w-0 bg-transparent transition-colors',
                    'outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    'focus-visible:border-b-primary-100',
                    'border border-gray-300 focus:border-secondary-200 rounded-md',
                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                    'peer px-4 pt-8 pb-4 text-gray-900 selection:bg-primary-100/20 selection:text-black',
                    error && 'border-red-500 focus:border-red-500',
                )}
            />
            <label
                htmlFor={props.name}
                className={cn(
                    'flex items-center gap-1',
                    'select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
                    'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
                    'absolute left-5 top-3 text-xs text-gray-500 transition-all',
                    'peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500',
                    'peer-focus:text-xs peer-focus:top-3 peer-focus:text-black',
                )}
            >
                {label} {required && <span>*</span>}
            </label>
            {children ? (
                <span className='absolute right-6 top-1/2 -translate-y-1/2'>
                    {children}
                </span>
            ) : null}
        </div>
    );
}
