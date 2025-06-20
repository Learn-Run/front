import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Close } from '@/shared/assets/icons';

export default function SearchModal() {
    const { closeModal } = useModalContext();

    //FEXME: 디자인 나오면 수정 필요
    return (
        <div className='p-4'>
            <div className='flex justify-end w-full'>
                <button onClick={closeModal}>
                    <Close />
                </button>
            </div>
            <h1>Test Modal</h1>
        </div>
    );
}
