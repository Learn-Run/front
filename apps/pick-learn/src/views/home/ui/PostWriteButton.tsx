'use client';
import { redirect } from 'next/navigation';

import { routes } from '@/shared/model/constants/routes';
import { Button } from '@repo/ui/components/base/Button';

export default function PostWriteButton() {
    return (
        <Button
            variant='default'
            className='w-fit py-4 px-8 mt-10'
            type='button'
            onClick={() => {
                redirect(`${routes.postCreate}`);
            }}
        >
            지금 바로 질문해보기
        </Button>
    );
}
