import { poppins } from '@/shared/assets/fonts';
import { cn } from '@repo/ui/lib/utils';

export default function MainHeader() {
    return (
        <header className='sticky top-0 left-60 right-0 border border-gray-300 p-8 bg-white hidden md:block z-10'>
            <h2 className='text-2xl font-medium pb-2.5'>활동 대시보드</h2>
            <p className={cn(poppins.className, 'text-sm text-gray-500')}>
                최근 대화와 알림을 한 눈에 확인하세요
            </p>
        </header>
    );
}
