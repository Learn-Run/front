import { cn } from '@repo/ui/lib/utils';

export default function Hamberger({ className }: { className?: string }) {
    return (
        <div className={cn(className)}>
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M4 12H20M4 18H20M4 6H20'
                    stroke='#8C8C8C'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </svg>
        </div>
    );
}
