import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Close } from '@/shared/assets/icons';
import GetSearchButton from './GetSearchButton';

export default function SearchModal() {
    const { closeModal } = useModalContext();

    return (
        <div className='p-4'>
            <div className='flex justify-end w-full pb-4'>
                <button onClick={closeModal}>
                    <Close />
                </button>
            </div>
            <div className='flex gap-x-2'>
                <input
                    type='text'
                    placeholder='검색어를 입력해주세요.'
                    className='w-full border border-primary-100 rounded-lg p-2 '
                />
                <GetSearchButton />
            </div>
            {/* <h1>업데이트 예정입니다.</h1> */}
        </div>
    );
}
