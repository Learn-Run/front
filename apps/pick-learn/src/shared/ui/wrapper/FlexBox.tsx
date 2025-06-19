import { ReactNode } from 'react';

export default function FlexBox({
    className,
    children,
    onClick,
}: {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}) {
    return (
        <div onClick={onClick} className={`flex ${className}`}>
            {children}
        </div>
    );
}
