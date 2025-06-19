'use client';

import { useState, Fragment } from 'react';

import { AlertContext, AlertContextType } from './AlertContext';
import Alert from './Alert';

export type AlertItem = {
    id: string;
    message: string;
    type: keyof AlertContextType;
};

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
    const [alerts, setAlerts] = useState<AlertItem[]>([]);

    const showAlert = (type: AlertItem['type'], message: string) => {
        const id = Math.random().toString(36).substring(2, 9);
        // 전체 누적
        // setAlerts((prev) => [...prev, { id, type, message }]);
        // 마지막 하나만 노출
        setAlerts([{ id, type, message }]);

        setTimeout(() => {
            setAlerts((prev) => prev.filter((alert) => alert.id !== id));
        }, 3000);
    };

    const contextValue: AlertContextType = {
        basic: (msg) => showAlert('basic', msg),
        error: (msg) => showAlert('error', msg),
        wiggle: (msg) => showAlert('wiggle', msg),
        midBig: (msg) => showAlert('midBig', msg),
        heartBeat: (msg) => showAlert('heartBeat', msg),
        hideAll: () => setAlerts([]),
    };

    return (
        <AlertContext.Provider value={contextValue}>
            {children}
            <div className='flex flex-col gap-2'>
                {alerts.map((alert) => {
                    return (
                        <Fragment key={alert.id}>
                            <Alert alert={alert} />
                        </Fragment>
                    );
                })}
            </div>
        </AlertContext.Provider>
    );
};

export default AlertProvider;
