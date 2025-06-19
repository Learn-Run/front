'use client';

import { useState } from 'react';

interface ToggleCheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
    disabled?: boolean;
}

const ToggleCheckbox = ({
    checked,
    defaultChecked = false,
    onChange,
    className = '',
    disabled = false,
}: ToggleCheckboxProps) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (!isControlled) {
            setInternalChecked(!isChecked);
        }
        onChange?.(!isChecked);
    };

    return (
        <div
            onClick={!disabled ? toggle : undefined}
            className={`relative w-fit cursor-pointer ${className}`}
        >
            <input
                type='checkbox'
                checked={isChecked}
                readOnly
                disabled={disabled}
                className='appearance-none w-[4.3rem] h-[2.2rem] rounded-full bg-[#DDDDDD] ring-0 outline-none checked:bg-brand checked:border-brand transition-all cursor-pointer'
            />
            <div
                className={`absolute bg-white h-[1.9rem] w-[1.9rem] rounded-full top-0.5 transition-transform cursor-pointer
            ${isChecked ? 'left-[2.2rem]' : 'left-0.5'}`}
            />
        </div>
    );
};

export default ToggleCheckbox;
