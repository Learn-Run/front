export default function LogOut({ className }: { className?: string }) {
    return (
        <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                d='M17.5 3.5H22.1667C22.7855 3.5 23.379 3.74583 23.8166 4.18342C24.2542 4.621 24.5 5.21449 24.5 5.83333V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H17.5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M11.6666 19.8334L17.5 14.0001L11.6666 8.16675'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M17.5 14H3.5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
