import { cn } from '@repo/ui/lib/utils';

export default function Clock({ className }: { className?: string }) {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(className)}
        >
            <path
                d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z'
                fill='white'
                stroke='#A856FA'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M12 7.2002V12.0002L15.2 13.6002' fill='white' />
            <path
                d='M12 7.2002V12.0002L15.2 13.6002'
                stroke='#A856FA'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
