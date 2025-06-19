import { cn } from '@repo/ui/lib/utils';

export default function BreadCrumb({ className }: { className?: string }) {
    return (
        <svg
            width='9'
            height='15'
            viewBox='0 0 9 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(className)}
        >
            <path
                d='M7.30908 7.19111C7.47861 7.36064 7.47861 7.63955 7.30908 7.80908L2.93408 12.1841C2.76455 12.3536 2.48564 12.3536 2.31611 12.1841C2.14658 12.0146 2.14658 11.7356 2.31611 11.5661L6.38213 7.5001L2.31611 3.43408C2.14658 3.26455 2.14658 2.98564 2.31611 2.81611C2.48564 2.64658 2.76455 2.64658 2.93408 2.81611L7.30908 7.19111Z'
                fill='#8C8C8C'
            />
        </svg>
    );
}
