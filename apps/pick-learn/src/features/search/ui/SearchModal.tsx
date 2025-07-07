'use client';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Close } from '@/shared/assets/icons';
import GetSearchButton from './GetSearchButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchModal() {
    const { closeModal } = useModalContext();
    const [searchKeyword, setSearchKeyword] = useState('');
    const router = useRouter();

    const handleSearch = async () => {
        if (!searchKeyword.trim()) {
            alert('검색어를 입력해주세요.');
            return;
        }
        closeModal();
        router.push(`/search?keyword=${searchKeyword}`);
    };
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
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <GetSearchButton onSearch={handleSearch} />
            </div>
            {/* <h1>업데이트 예정입니다.</h1> */}
        </div>
    );
}
