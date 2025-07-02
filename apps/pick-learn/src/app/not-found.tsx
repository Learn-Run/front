import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4'>
            <div className='max-w-md w-full text-center'>
                <div className='mb-8'>
                    <h1 className='text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse'>
                        404
                    </h1>
                </div>

                <div className='mb-8'>
                    <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
                        페이지를 찾을 수 없습니다
                    </h2>
                    <p className='text-gray-600 leading-relaxed'>
                        요청하신 페이지가 존재하지 않거나 이동되었을 수
                        있습니다.
                        <br />
                        URL을 다시 확인해주세요.
                    </p>
                </div>

                <div className='mb-8 flex justify-center space-x-2'>
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className='w-3 h-3 bg-blue-500 rounded-full animate-bounce'
                            style={{ animationDelay: `${i * 0.1}s` }}
                        />
                    ))}
                </div>

                <div className='space-y-4'>
                    <Link
                        href='/'
                        className='inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                    >
                        홈으로 돌아가기
                    </Link>
                </div>

                <div className='absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse' />
                <div
                    className='absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse'
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className='absolute top-1/2 left-5 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse'
                    style={{ animationDelay: '2s' }}
                />
            </div>
        </div>
    );
}
