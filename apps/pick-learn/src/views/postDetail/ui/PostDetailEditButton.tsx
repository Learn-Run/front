'use client';
import { Button } from '@repo/ui/components/base/Button';
import { useRouter } from 'next/navigation';

export default function PostDetailEditButton({
    postUuid,
}: {
    postUuid: string;
}) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/post/${postUuid}/edit`);
    };
    return (
        <Button
            variant='outline'
            className='text-sm w-fit'
            onClick={handleClick}
        >
            Edit
        </Button>
    );
}
