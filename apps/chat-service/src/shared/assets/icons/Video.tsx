import { cn } from '@repo/ui/lib/utils';

export default function Video({ className }: { className?: string }) {
    return (
        <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn('text-white', className)}
        >
            <path
                d='M14.6185 23.8244H7.24516C3.5585 23.8244 2.3335 21.3744 2.3335 18.9127V9.0894C2.3335 5.40273 3.5585 4.17773 7.24516 4.17773H14.6185C18.3052 4.17773 19.5302 5.40273 19.5302 9.0894V18.9127C19.5302 22.5994 18.2935 23.8244 14.6185 23.8244Z'
                stroke='currentColor'
                strokeWidth='2.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M22.7734 19.9502L19.53 17.6752V10.3135L22.7734 8.03849C24.36 6.93015 25.6667 7.60682 25.6667 9.55515V18.4452C25.6667 20.3935 24.36 21.0702 22.7734 19.9502Z'
                stroke='currentColor'
                strokeWidth='2.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13.4167 12.834C14.3832 12.834 15.1667 12.0505 15.1667 11.084C15.1667 10.1175 14.3832 9.33398 13.4167 9.33398C12.4502 9.33398 11.6667 10.1175 11.6667 11.084C11.6667 12.0505 12.4502 12.834 13.4167 12.834Z'
                stroke='currentColor'
                strokeWidth='2.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
