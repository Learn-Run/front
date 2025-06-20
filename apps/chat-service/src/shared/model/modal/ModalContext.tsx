'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';

import type { ModalContextType, ModalProviderProps } from './types';
import { Modal } from '@repo/ui/components/base/Modal';

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export function ModalProvider({ children }: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<ReactNode | null>(null);

    const openModal = (content: ReactNode) => {
        setContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setContent(null);
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <Modal open={isOpen} onClose={closeModal}>
                {content}
            </Modal>
        </ModalContext.Provider>
    );
}

export function useModalContext() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
