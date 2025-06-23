'use client';
import { Close } from '@/shared/assets/icons';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Button } from '@repo/ui/components/base/Button';

export default function VideoCallErrorModal() {
    const { closeModal } = useModalContext();
    return (
        <div className='p-6'>
            <div className='flex justify-end'>
                <button
                    type='button'
                    className='cursor-pointer p-1'
                    onClick={() => closeModal()}
                >
                    <Close />
                </button>
            </div>
            <p className='text-gray-700 pt-5 pb-10 text-center'>
                화상 회의 연결 중 문제가 발생했습니다. <br />
                잠시 후 다시 시도해주세요.
            </p>

            <Button
                variant={'outline'}
                type='button'
                onClick={() => closeModal()}
                className='py-2.5'
            >
                확인
            </Button>
        </div>
    );
}
