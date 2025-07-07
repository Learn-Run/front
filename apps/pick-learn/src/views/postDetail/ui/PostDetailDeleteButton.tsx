'use client';
import { deletePost } from '@/features/post/api';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import { Button } from '@repo/ui/components/base/Button';
import { useRouter } from 'next/navigation';

export default function PostDetailDeleteButton({
    postUuid,
}: {
    postUuid: string;
}) {
    const router = useRouter();
    const alert = useAlert();
    const handleDelete = async () => {
        try {
            await deletePost(postUuid);
            router.back();
            alert.basic('삭제되었습니다.');
        } catch (error) {
            console.error(error);
            alert.error('삭제에 실패했습니다.');
        }
    };
    return (
        <Button
            variant='outline'
            className='text-sm w-fit'
            onClick={handleDelete}
        >
            Delete
        </Button>
    );
}
