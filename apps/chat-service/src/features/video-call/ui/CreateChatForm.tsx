'use client';
import { useState } from 'react';

import { Button } from '@repo/ui/components/base/Button';

export default function CreateChatForm() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(false);
        setMessage('');
    };

    return (
        <div className='px-6 py-6 border-t border-gray-300'>
            <form className='flex gap-3 items-end' onSubmit={handleSubmit}>
                <textarea
                    name='message'
                    value={message}
                    rows={1}
                    onChange={(e) => setMessage(e.target.value)}
                    className='mix-h-20 p-3 w-full grow border border-gray-300 focus:border-primary-100 outline-none rounded-md transition-all'
                />
                <Button
                    type='submit'
                    disabled={message === '' || loading}
                    className='w-fit'
                >
                    전송
                </Button>
            </form>
        </div>
    );
}
