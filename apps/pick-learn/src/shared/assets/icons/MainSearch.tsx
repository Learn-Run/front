import { cn } from '@repo/ui/lib/utils';

export default function MainSearch({ className }: { className?: string }) {
    return (
        <div className={cn(className)}>
            <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M16.25 16.875L18.75 13.75L16.25 10.625'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M26.25 26.25L20.875 20.875'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M11.25 10.625L8.75 13.75L11.25 16.875'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
}
