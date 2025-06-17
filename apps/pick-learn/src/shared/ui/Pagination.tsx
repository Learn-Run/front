'use client';
import { Button } from '@repo/ui/components/base/Button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LeftChevron from '../assets/icons/LeftChevron';

export default function PostPagination({ totalPage }: { totalPage: number }) {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const rawPage = Number(searchParams.get('page'));
    const currentPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

    const groupSize = 4;
    const getPageGroup = () => {
        const currentGroup = Math.floor((currentPage - 1) / groupSize);
        const start = currentGroup * groupSize + 1;
        const end = Math.min(start + groupSize - 1, totalPage);
        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };
    const currentGroup = Math.floor((currentPage - 1) / groupSize);

    const pageNumbers = totalPage === 0 ? [] : getPageGroup();
    const hasNextGroup = (currentGroup + 1) * groupSize < totalPage;
    const hasPrevGroup = currentGroup > 0;

    const handleChangePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', newPage.toString());
        router.push(`${pathName}?${params.toString()}`, { scroll: false });
    };

    return (
        <nav className='py-10'>
            <ul className='flex items-center justify-center gap-2'>
                {hasPrevGroup && (
                    <li>
                        <Button
                            type='button'
                            className='w-9 h-9 disabled:bg-gray-300 disabled:text-white'
                            variant='outline'
                            size='icon'
                            disabled={currentPage === 1}
                            onClick={() =>
                                handleChangePage(
                                    Math.max(1, currentGroup * groupSize),
                                )
                            }
                        >
                            <LeftChevron />
                        </Button>
                    </li>
                )}

                {totalPage === 0 && (
                    <li>
                        <Button
                            type='button'
                            variant='outline'
                            size='icon'
                            className='bg-gray-300 text-gray-500 font-medium cursor-not-allowed w-9 h-9'
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
                            variant='outline'
                            size='icon'
                            className={`w-9 h-9 font-medium ${
                                currentPage === page
                                    ? 'bg-primary-100 text-white  hover:bg-primary-100 '
                                    : 'bg-white text-gray-800 hover:bg-gray-100'
                            }`}
                            onClick={() => handleChangePage(page)}
                        >
                            {page}
                        </Button>
                    </li>
                ))}
                {hasNextGroup && (
                    <li>
                        <Button
                            type='button'
                            variant='outline'
                            size='icon'
                            className='w-9 h-9 disabled:bg-gray-300 disabled:text-black disabled:cursor-not-allowed disabled:border-gray-500'
                            disabled={!hasNextGroup}
                            onClick={() => {
                                if (hasNextGroup) {
                                    handleChangePage(
                                        Math.ceil(currentPage / groupSize) *
                                            groupSize +
                                            1,
                                    );
                                } else {
                                    handleChangePage(totalPage);
                                }
                            }}
                        >
                            ...
                        </Button>
                    </li>
                )}
            </ul>
        </nav>
    );
}
