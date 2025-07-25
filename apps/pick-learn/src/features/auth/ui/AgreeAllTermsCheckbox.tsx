'use client';
import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '@repo/ui/components/base/Checkbox';
import type { AgreeAllTermsCheckboxProps } from './types';

export function AgreeAllTermsCheckbox({
    onChange,
}: AgreeAllTermsCheckboxProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name='agreeAllTerms'
            control={control}
            render={({ field: { value } }) => (
                <div className='flex items-center gap-2'>
                    <Checkbox
                        id='agreeAllTerms'
                        checked={value}
                        onCheckedChange={onChange}
                    />
                    <label
                        htmlFor='agreeAllTerms'
                        className='text-primary-100 text-sm'
                    >
                        전체 동의
                    </label>
                </div>
            )}
        />
    );
}
