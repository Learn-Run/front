import { cn } from '../../lib/utils';

export default function Minus({ className }: { className?: string }) {
    return (
        <div className={cn(className)}>
            <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <rect
                    x='0.5'
                    y='0.5'
                    width='35'
                    height='35'
                    rx='17.5'
                    fill='#FAFAFA'
                />
                <rect
                    x='0.5'
                    y='0.5'
                    width='35'
                    height='35'
                    rx='17.5'
                    stroke='#D9D9D9'
                />
                <g clipPath='url(#clip0_366_1356)'>
                    <path
                        opacity='0.5'
                        d='M11.125 18H24.875'
                        stroke='#4B4B4B'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </g>
                <defs>
                    <clipPath id='clip0_366_1356'>
                        <rect
                            width='20'
                            height='20'
                            fill='white'
                            transform='translate(8 8)'
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
