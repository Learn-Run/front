'use client';
import { Button } from '@repo/ui/components/base/Button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function PostPagination({
    totalPage,
    currentPage,
}: {
    totalPage: number;
    currentPage: number;
}) {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const getPageGroup = () => {
        const groupSize = 5;
        const currentGroup = Math.floor((currentPage - 1) / groupSize);
        const start = currentGroup * groupSize + 1;
        const end = Math.min(start + groupSize - 1, totalPage);
        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    const pageNumbers = getPageGroup();
    const hasNextGroup = currentPage + 5 <= totalPage;

    const handleChangePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`${pathName}?${params.toString()}`, { scroll: true });
    };

    return (
        <nav className='py-10'>
            <ul className='flex items-center justify-center gap-2'>
                <li>
                    <Button
                        type='button'
                        size='lg'
                        className='px-4 py-4'
                        disabled={currentPage === 0}
                        onClick={() => handleChangePage(currentPage - 1)}
                    >
                        이전
                    </Button>
                </li>

                {totalPage === 0 && (
                    <li>
                        <Button
                            type='button'
                            size='lg'
                            className='bg-gray-300 text-gray-500 cursor-not-allowed px-4 py-4'
                            disabled
                        >
                            1
                        </Button>
                    </li>
                )}
                {pageNumbers.map((page) => (
                    <li key={page}>
                        <Button
                            type='button'
                            size='lg'
                            className={`px-4 py-4 ${
                                currentPage === page
                                    ? 'bg-primary-100 text-white font-semibold hover:bg-primary-100'
                                    : 'bg-white text-gray-800 hover:bg-gray-100'
                            }`}
                            onClick={() => handleChangePage(page)}
                        >
                            {page}
                        </Button>
                    </li>
                ))}
                <li>
                    <Button
                        type='button'
                        size='lg'
                        className='px-4 py-4'
                        disabled={!hasNextGroup}
                        onClick={() => {
                            if (hasNextGroup) {
                                handleChangePage(currentPage + 5);
                            } else {
                                handleChangePage(totalPage);
                            }
                        }}
                    >
                        다음
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
