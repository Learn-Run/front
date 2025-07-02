import { AlertItemType } from '@/shared/model/context/AlertProvider';

const alertTypeConfig: Record<string, { className: string; position: string }> =
    {
        basic: {
            className:
                'toast-basic animate-fadeIn bg-white p-3 rounded-lg shadow-lg',
            position: 'bottom-[3vh] left-1/2 translate-x-[-50%]',
        },
        wiggle: {
            className: 'toast-basic animate-wiggle',
            position: 'bottom-[3vh] left-1/2 translate-x-[-50%]',
        },
        error: {
            className:
                'toast-error animate-headShake text-error bg-white p-3 rounded-lg shadow-lg',
            position: 'bottom-[3vh] left-1/2 translate-x-[-50%]',
        },
        heartBeat: {
            className: 'toast-basic animate-heartBeat',
            position: 'bottom-[3vh] left-1/2 translate-x-[-50%]',
        },
        midBig: {
            className: 'toast-basic animate-headShake',
            position: 'bottom-[3vh] left-1/2 translate-x-[-50%]',
        },
    };

interface AlertProps {
    alert: AlertItemType;
}

const Alert = ({ alert, ...props }: AlertProps) => {
    const config = alertTypeConfig[alert.type] || alertTypeConfig.basic;

    return (
        <div className={`fixed z-[9999] animate-fadeOut  ${config?.position}`}>
            <div
                role='alert'
                className={`flex items-center ${config?.className}`}
                {...props}
            >
                <span className={`mx-auto text-[0.875rem] font-bold `}>
                    {alert.message}
                </span>
            </div>
        </div>
    );
};

export default Alert;
