import { Message } from '@/shared/assets/icons';
import { routes } from '@/shared/model/constants/routes';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function CurrentMassageTop() {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-x-2'>
                <Message className='text-secondary-200' />
                <h2 className='text-sm md:text-xl font-semibold '>
                    나의 최근 대화
                </h2>
            </div>

            <Link
                href={routes.messages}
                className='flex gap-2 text-tertiary-300'
            >
                <span className='hidden lg:block text-sm md:text-base'>
                    모든 대화보기
                </span>
                <span className='text-sm md:text-base'>
                    <ArrowRight className='text-tertiary-300' />
                </span>
            </Link>
        </div>
    );
}
