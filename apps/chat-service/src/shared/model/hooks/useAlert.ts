'use client';
import { useContext } from 'react';

import { AlertContext } from '../context/AlertContext';

export const useAlert = () => {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error('useAlert must be used within AlertContext');
    }

    return context;
};
