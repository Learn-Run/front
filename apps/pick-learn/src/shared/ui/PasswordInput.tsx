'use client';
import { useState } from 'react';

import Input from '@repo/ui/components/base/Input/index';
import type { InputProps } from '../../../../../packages/ui/src/components/base/Input/types';
import { Eye, EyeOff } from '../assets/icons';

export default function PasswordInput({ ...props }: InputProps) {
    const [viewPassword, setViewPassword] = useState(false);

    return (
        <Input type={!viewPassword ? 'password' : 'text'} {...props}>
            <button
                type='button'
                className='cursor-pointer'
                onClick={() => setViewPassword((prev) => !prev)}
            >
                {!viewPassword ? <Eye /> : <EyeOff />}
            </button>
        </Input>
    );
}
