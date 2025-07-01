'use client';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Button } from '@repo/ui/components/base/Button';
import CommentEditModal from './CommentEditModal';

export default function CommentEditButton({
    content,
    commentUuid,
}: {
    content: string;
    commentUuid: string;
}) {
    const { openModal } = useModalContext();
    return (
        <Button
            variant='outline'
            className='w-fit max-h-9'
            onClick={() =>
                openModal(
                    <CommentEditModal
                        content={content}
                        commentUuid={commentUuid}
                    />,
                )
            }
        >
            수정
        </Button>
    );
}
