'use client';
import { signOut } from 'next-auth/react';

import { Close } from '@/shared/assets/icons';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Button } from '@repo/ui/components/base/Button';
import { useRouter } from 'next/router';
import { routes } from '@/shared/model/constants/routes';

export default function LogOutConfirmModal() {
    const { closeModal } = useModalContext();
    const router = useRouter();
    const handleLogOut = async () => {
        try {
            await signOut();
            closeModal();
            router.push(routes.home);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='p-4'>
            <div className='flex justify-end w-full'>
                <button onClick={closeModal}>
                    <Close />
                </button>
            </div>
            <h2 className='text-gray-700 font-semibold text-center pb-10 pt-4'>
                로그아웃 하시겠습니까 ?
            </h2>
            <div className='flex justify-end gap-4'>
                <Button variant='outline' onClick={closeModal}>
                    취소
                </Button>
                <Button onClick={handleLogOut}>Log out</Button>
            </div>
        </div>
    );
}
