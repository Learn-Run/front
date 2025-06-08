'use client';
import { useEffect, useState } from 'react';

import type { AgreeTermType } from '../../api/types';
import { useAgreeTerms } from '../../model/hooks/useAgreeTerms';
import { getAgreeTermsByUuid, getAllAgreeTermsUuid } from '../../api';
import { AgreeAllTermsCheckbox, AgreeTermCheckbox } from '../../ui';

export default function SignUpStep1() {
    const [allAgreeTerms, setAllAgreeTerms] = useState<AgreeTermType[]>([]);
    const [loading, setLoading] = useState(true);

    const { handleAllTermsChange } = useAgreeTerms(
        allAgreeTerms.map((item) => item.agreementUuid),
    );

    useEffect(() => {
        const getAllAgreeUuid = async () => {
            setLoading(true);
            const allAgreeTermsUuid = await getAllAgreeTermsUuid();

            const result = await Promise.all(
                allAgreeTermsUuid.map(
                    async ({ agreementUuid }) =>
                        await getAgreeTermsByUuid(agreementUuid),
                ),
            );
            setAllAgreeTerms(result);
            setLoading(false);
        };

        getAllAgreeUuid();
    }, []);

    if (loading) {
        return (
            <div className='flex flex-col items-center justify-center py-10'>
                <div className='w-8 h-8 border-4 border-primary-100 border-t-transparent rounded-full animate-spin mb-4' />
                <span className='text-gray-500 text-sm'>
                    약관 정보를 불러오는 중입니다...
                </span>
            </div>
        );
    }

    return (
        <div className='space-y-4'>
            <AgreeAllTermsCheckbox onChange={handleAllTermsChange} />
            <hr />
            {allAgreeTerms.map(
                ({
                    agreementUuid,
                    agreementName,
                    agreementContent,
                    required,
                }) => (
                    <AgreeTermCheckbox
                        key={agreementUuid}
                        agreementUuid={agreementUuid}
                        agreementName={agreementName}
                        agreementContent={agreementContent}
                        required={required}
                    />
                ),
            )}
        </div>
    );
}
