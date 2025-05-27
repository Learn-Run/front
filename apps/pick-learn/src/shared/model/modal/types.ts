import type { ReactNode } from 'react';

export type ModalContextType = {
    isOpen: boolean;
    // content: ReactNode | null;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
};

export type ModalProviderProps = {
    children: ReactNode;
};
