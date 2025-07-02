import { cn } from '@repo/ui/lib/utils';

export default function BookMark({ className }: { className?: string }) {
    return (
        <div className={cn('w-7 h-7', className)}>
            <svg
                width='30'
                height='29'
                viewBox='0 0 30 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <rect
                    x='1'
                    y='0.5'
                    width='28'
                    height='28'
                    rx='6'
                    fill='white'
                />
                <rect
                    x='1'
                    y='0.5'
                    width='28'
                    height='28'
                    rx='6'
                    stroke='#D9D9D9'
                />
                <g clipPath='url(#clip0_433_773)'>
                    <path
                        d='M19 20.5L15 18L11 20.5V9.5C11 9.36739 11.0527 9.24021 11.1464 9.14645C11.2402 9.05268 11.3674 9 11.5 9H18.5C18.6326 9 18.7598 9.05268 18.8536 9.14645C18.9473 9.24021 19 9.36739 19 9.5V20.5Z'
                        stroke='#4B4B4B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </g>
                <defs>
                    <clipPath id='clip0_433_773'>
                        <rect
                            width='16'
                            height='16'
                            fill='white'
                            transform='translate(7 6.5)'
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
