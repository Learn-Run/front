import { cn } from '@repo/ui/lib/utils';

export default function Pencil({ className }: { className?: string }) {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(className)}
        >
            <circle cx='12' cy='12' r='12' fill='white' />
            <g clipPath='url(#clip0_1433_3007)'>
                <path
                    d='M13.9996 7.33326L16.6663 9.99993M18.1156 8.54126C18.4681 8.18888 18.6662 7.71091 18.6662 7.2125C18.6663 6.71409 18.4683 6.23607 18.116 5.8836C17.7636 5.53112 17.2856 5.33307 16.7872 5.33301C16.2888 5.33295 15.8108 5.53088 15.4583 5.88326L6.56096 14.7826C6.40618 14.9369 6.29171 15.127 6.22763 15.3359L5.34696 18.2373C5.32973 18.2949 5.32843 18.3562 5.3432 18.4145C5.35796 18.4728 5.38824 18.5261 5.43083 18.5686C5.47341 18.6111 5.52671 18.6413 5.58507 18.656C5.64343 18.6707 5.70467 18.6693 5.7623 18.6519L8.6643 17.7719C8.87308 17.7084 9.06308 17.5947 9.21763 17.4406L18.1156 8.54126Z'
                    stroke='#ACACAC'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
            <defs>
                <clipPath id='clip0_1433_3007'>
                    <rect
                        width='16'
                        height='16'
                        fill='white'
                        transform='translate(4 4)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
}
