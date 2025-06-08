'use client';
import { useEffect, useState } from 'react';

interface UseTimerProps {
    initialTime?: number;
    onTimeEnd?: () => void;
}

export const useTimer = ({
    initialTime = 300,
    onTimeEnd,
}: UseTimerProps = {}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setIsRunning(false);
                        onTimeEnd?.();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isRunning, timeLeft, onTimeEnd]);

    const start = () => {
        setTimeLeft(initialTime);
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setTimeLeft(initialTime);
        setIsRunning(false);
    };

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return {
        timeLeft,
        isRunning,
        start,
        stop,
        reset,
        formatTime,
    };
};
