import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Button } from '@repo/ui/components/base/Button';
import { useState } from 'react';
import { UpdateComment } from '../api';
import { useAlert } from '@/features/post/model/hooks/useAlert';

export default function CommentEditModal({
    content,
    commentUuid,
}: {
    content: string;
    commentUuid: string;
}) {
    const { closeModal } = useModalContext();
    const [value, setValue] = useState(content);
    const onChange = (value: string) => {
        setValue(value);
    };

    const alert = useAlert();
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(value);
        await UpdateComment(commentUuid, value);
        closeModal();
        alert.basic('댓글이 수정되었습니다.');
    };

    const handleCancel = () => {
        closeModal();
    };

    return (
        <div className='flex flex-col gap-5 w-full p-4'>
            <h2 className='text-lg font-bold'>댓글 수정 </h2>
            <form onSubmit={handleSave} className='flex flex-col gap-5 w-full '>
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className='text-gray-700 border border-gray-700 rounded-xl p-4 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-primary-100'
                    placeholder='자기소개를 입력해주세요.'
                />
                <div className='flex gap-2 justify-end py-3'>
                    <Button
                        onClick={handleCancel}
                        variant='outline'
                        className='px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium'
                    >
                        Cancel
                    </Button>
                    <Button type='submit'>Save</Button>
                </div>
            </form>
        </div>
    );
}
