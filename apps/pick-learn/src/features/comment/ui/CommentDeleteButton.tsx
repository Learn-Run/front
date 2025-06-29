'use client';
import { Button } from '@repo/ui/components/base/Button';
import { DeleteComment } from '../api';
import { useAlert } from '@/features/post/model/hooks/useAlert';

export default function CommentDeleteButton({
    commentUuid,
}: {
    commentUuid: string;
}) {
    const alert = useAlert();
    const handleDelete = async () => {
        await DeleteComment(commentUuid);
        alert.basic('댓글이 삭제되었습니다.');
    };

    return (
        <Button
            variant='outline'
            className='w-fit max-h-9'
            onClick={handleDelete}
        >
            삭제
        </Button>
    );
}
