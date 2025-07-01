'use client';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export function useAgreeTerms(term_uuids: string[]) {
    const { setValue, watch } = useFormContext();

    useEffect(() => {
        const termValues: string[] = watch('agreementCheckList') || [];

        const allChecked =
            term_uuids.length > 0 &&
            term_uuids.every((uuid) => termValues.includes(uuid));

        setValue('agreeAllTerms', allChecked);
    }, [term_uuids, watch, setValue]);

    const handleAllTermsChange = (checked: boolean) => {
        setValue('agreeAllTerms', checked);
        setValue('agreementCheckList', checked ? term_uuids : []);
    };

    return { term_uuids, handleAllTermsChange };
}
