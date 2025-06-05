'use client';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export function useAgreeTerms(term_uuids: string[]) {
    const { setValue, watch } = useFormContext();
    const termValues: string[] = useMemo(() => {
        return watch('agreementCheckList') || [];
    }, [watch]);

    useEffect(() => {
        const allChecked =
            term_uuids.length > 0 &&
            term_uuids.every((uuid) => termValues.includes(uuid));
        setValue('agreeAllTerms', allChecked);
    }, [termValues, setValue, term_uuids]);

    const handleAllTermsChange = (checked: boolean) => {
        setValue('agreeAllTerms', checked);
        setValue('agreementCheckList', checked ? term_uuids : []);
    };

    return { term_uuids, handleAllTermsChange };
}
