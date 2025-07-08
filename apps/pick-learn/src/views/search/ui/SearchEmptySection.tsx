import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';
import { Search } from 'lucide-react';

export default function SearchEmptySection() {
    return (
        <SectionWrapper className='flex flex-col items-center justify-center min-h-[400px] py-16'>
            <div className='flex flex-col items-center gap-6 text-center'>
                <div className='relative'>
                    <div className='w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center'>
                        <Search className='w-12 h-12 text-primary-100' />
                    </div>
                    <div className='absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full opacity-60 animate-pulse' />
                    <div
                        className='absolute -bottom-2 -left-2 w-4 h-4 bg-purple-200 rounded-full opacity-60 animate-pulse'
                        style={{ animationDelay: '1s' }}
                    />
                </div>

                <div className='space-y-3'>
                    <h2 className='text-2xl font-bold text-gray-800'>
                        검색 결과가 없습니다
                    </h2>
                    <p className='text-gray-600 max-w-md leading-relaxed'>
                        다른 키워드로 검색해보시건나, 질문을 작성해 보세요.
                    </p>
                </div>

                {/* 제안 메시지 */}
                <div className='bg-gray-50 rounded-lg p-4 max-w-sm'>
                    <p className='text-sm text-gray-700'>
                        💡 <strong>검색 팁:</strong>
                        <br />
                        • 더 구체적인 키워드를 사용해보세요
                        <br />• 질문을 작성해서 도움을 받아보세요
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
