'use client';
import { Button } from '@repo/ui/components/base/Button';
import React, { useState } from 'react';
import { CreateComment } from '../api';
import { useAlert } from '@/features/post/model/hooks/useAlert';

export default function CommentWriteForm({ postUuid }: { postUuid: string }) {
    const [content, setContent] = useState('');
    const alert = useAlert();

    const handleSubmit = async () => {
        if (!content.trim()) return;
        await CreateComment(postUuid, content);
        alert.basic('댓글이 등록되었습니다.');
        setContent('');
    };

    return (
        <div className='pt-11'>
            <textarea
                className='w-full bg-primary-50 border border-primary-100 rounded-lg resize-none p-4'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='댓글을 입력해주세요.'
            />
            <div className='flex justify-end pt-5 border-b border-gray-500 pb-5'>
                <Button onClick={handleSubmit} className='w-fit'>
                    등록
                </Button>
            </div>
        </div>
    );
}
