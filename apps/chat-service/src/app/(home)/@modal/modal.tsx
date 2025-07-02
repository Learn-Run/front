'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

import { Close } from '@/shared/assets/icons';

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [mounted, setMounted] = useState(false);
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
        setModalRoot(document.getElementById('modal-root'));

        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }

        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    function onDismiss() {
        router.back();
    }

    // 아직 DOM 준비 안 됐으면 아무것도 렌더링 안 함
    if (!mounted || !modalRoot) return null;

    return createPortal(
        <div
            className='fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-5 md:px-0'
            onClick={onDismiss}
        >
            <dialog
                ref={dialogRef}
                className='w-full max-w-[500px] border-none rounded-xl bg-white relative flex justify-center items-center p-10'
                onClose={onDismiss}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onDismiss}
                    className='absolute top-2.5 right-2.5 cursor-pointer w-12 h-12 flex items-center justify-center'
                >
                    <Close />
                </button>
                {children}
            </dialog>
        </div>,
        modalRoot,
    );
}
