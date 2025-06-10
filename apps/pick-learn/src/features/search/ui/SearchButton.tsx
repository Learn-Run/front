'use client';

import { cn } from '@repo/ui/lib/utils';
import Jobs from '@/shared/assets/icons/Jobs';
import MainSearch from '@/shared/assets/icons/MainSearch';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import SearchModal from './SearchModal';

export default function SearchButton() {
    const { openModal } = useModalContext();

    return (
        <button
            className='relative w-full max-w-[636px] z-10 mt-10'
            onClick={() => openModal(<SearchModal />)}
        >
            <p className=' w-full border-5 border-primary-100 rounded-full z-10 bg-white text-gray-700 py-6'>
                질문 혹은 답변을 검색해 보세요.
            </p>
            <div className='absolute top-1/2 -translate-y-1/2 left-3 z-10'>
                <Jobs className='scale-x-[-1] w-[80px] xs:w-[100px] sm:w-[120px] md:w-[175px] aspect-square' />
            </div>
            <div
                className={cn(
                    'absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center z-20',
                    ' bg-gradient-to-br from-primary-100/50 to-primary-100/90 ',
                    'rounded-full w-[72px] h-[72px] ',
                )}
            >
                <MainSearch />
            </div>
        </button>
    );
}
