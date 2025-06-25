'use client';
import { Button } from '@repo/ui/components/base/Button';

interface EditButtonProps {
    onClick: () => void;
    className?: string;
    children?: React.ReactNode;
}

export default function EditButton({
    onClick,
    className,
    children = 'Edit',
}: EditButtonProps) {
    return (
        <Button
            onClick={onClick}
            variant='outline'
            className={`text-sm font-medium w-fit ${className || ''}`}
        >
            {children}
        </Button>
    );
}
