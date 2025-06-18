import { cn } from '@repo/ui/lib/utils';

export default function Shared({ className }: { className?: string }) {
    return (
        <div className={cn(className)}>
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
                <g clipPath='url(#clip0_433_742)'>
                    <path
                        d='M11 16.5C12.1046 16.5 13 15.6046 13 14.5C13 13.3954 12.1046 12.5 11 12.5C9.89543 12.5 9 13.3954 9 14.5C9 15.6046 9.89543 16.5 11 16.5Z'
                        stroke='#4B4B4B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z'
                        stroke='#4B4B4B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M18 12C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12Z'
                        stroke='#4B4B4B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M16.3181 11.0813L12.6819 13.4188'
                        stroke='#4B4B4B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M12.6819 15.5813L16.3181 17.9188'
                        stroke='#4B4B4B'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </g>
                <defs>
                    <clipPath id='clip0_433_742'>
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
