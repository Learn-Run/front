import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Close } from '@/shared/assets/icons';

export default function SearchModal() {
    const { closeModal } = useModalContext();

    return (
        <div className='p-4'>
            <div className='flex justify-end w-full'>
                <button onClick={closeModal}>
                    <Close />
                </button>
            </div>
            <h1>업데이트 예정입니다.</h1>
        </div>
    );
}
