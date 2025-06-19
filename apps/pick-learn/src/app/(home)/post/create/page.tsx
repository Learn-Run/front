import PostWriteForm from '@/features/auth/ui/PostWriteForm';
import { MainWrapper } from '@/shared/ui';
import React from 'react';

export default function page() {
    return (
        <MainWrapper className='pt-40 container mx-auto px-4 lg:px-0'>
            <PostWriteForm />
        </MainWrapper>
    );
}
