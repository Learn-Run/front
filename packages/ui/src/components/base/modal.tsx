import { useEffect, useRef } from 'react';

import { cn } from '../../lib/utils';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    className?: string;
    variant?: 'card' | 'bottomSheet';
};

export function Modal({
    open,
    onClose,
    children,
    className,
    variant = 'card',
}: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [open]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        const dialog = dialogRef.current;
        const rect = dialog?.getBoundingClientRect();
        if (!rect) return;

        if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            onClose();
        }
    };

    const sharedClassNames = cn(
        'overflow-visible shadow-1 transition-all',
        className,
    );

    if (variant === 'bottomSheet') {
        return (
            <dialog
                ref={dialogRef}
                className={cn(
                    sharedClassNames,
                    'm-0 mt-auto rounded-t-md max-w-3xl',
                    'w-full fixed !z-50 left-1/2 transform -translate-x-1/2',
                    'animate-bottom-sheet-slide-up',
                )}
                onClick={handleBackdropClick}
            >
                {children}
            </dialog>
        );
    }

    return (
        <dialog
            ref={dialogRef}
            className={cn(
                sharedClassNames,
                'absolute left-1/2 top-1/2 -translate-1/2',
                'max-w-md w-[calc(100%-48px)] sm:w-full rounded-md',
                'backdrop:backdrop-blur-[2px]',
                'animate-card-slide-up',
            )}
            onClick={handleBackdropClick}
        >
            {children}
        </dialog>
    );
}
