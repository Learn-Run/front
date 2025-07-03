import Link from 'next/link';

import { routes } from '@/shared/model/constants/routes';
import { PencilIcon } from 'lucide-react';

export default function FloatingWriteButton() {
    return (
        <Link
            href={routes.postCreate}
            className='fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14 bg-primary-100 hover:bg-primary-200 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out'
            aria-label='질문 작성하기'
        >
            <PencilIcon className='w-6 h-6' />
        </Link>
    );
}
