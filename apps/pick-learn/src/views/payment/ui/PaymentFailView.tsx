import Link from 'next/link';
import { XCircle, ArrowLeft } from 'lucide-react';

import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import { Button } from '@repo/ui/components/base/Button';
import { routes } from '@/shared/model/constants/routes';

export default function PaymentFailView() {
    return (
        <SectionWrapper>
            <div className='flex flex-col items-center justify-center min-h-[60vh] px-4'>
                <div className='mb-6'>
                    <XCircle className='w-20 h-20 text-red-500' />
                </div>

                <div className='text-center mb-8'>
                    <h1 className='text-2xl font-bold text-gray-900 mb-3'>
                        결제에 실패했습니다
                    </h1>
                    <p className='text-gray-600 text-lg leading-relaxed max-w-md'>
                        결제 처리 중 문제가 발생했습니다. <br />
                        다시 시도해주시거나 다른 결제 방법을 이용해주세요.
                    </p>
                </div>

                <div className='bg-gray-50 rounded-lg p-6 mb-8 max-w-md w-full'>
                    <h3 className='font-semibold text-gray-900 mb-3'>
                        결제 실패의 일반적인 원인:
                    </h3>
                    <ul className='text-sm text-gray-600 space-y-2'>
                        <li className='flex items-start'>
                            <span className='text-red-500 mr-2'>•</span>
                            카드 잔액 부족 또는 한도 초과
                        </li>
                        <li className='flex items-start'>
                            <span className='text-red-500 mr-2'>•</span>
                            잘못된 카드 정보 입력
                        </li>
                        <li className='flex items-start'>
                            <span className='text-red-500 mr-2'>•</span>
                            네트워크 연결 문제
                        </li>
                        <li className='flex items-start'>
                            <span className='text-red-500 mr-2'>•</span>
                            결제 보안 정책에 따른 차단
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
                    <Link
                        href={routes.home}
                        className='flex items-center justify-center gap-2 bg-point-blue-200 w-full rounded-lg text-white hover:bg-point-blue-300 transition-colors'
                    >
                        Home
                    </Link>

                    <Link href={routes.point}>
                        <Button className='flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'>
                            <ArrowLeft className='w-4 h-4' />
                            포인트 페이지로
                        </Button>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
