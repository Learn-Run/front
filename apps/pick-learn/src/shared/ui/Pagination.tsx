'use client';
import { Button } from '@repo/ui/components/base/Button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LeftChevron from '../assets/icons/LeftChevron';
import { getPageGroup } from '../utils/getPageGroup';

export default function PostPagination({ totalPage }: { totalPage: number }) {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const rawPage = Number(searchParams.get('page'));
    const currentPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

    const GROUP_SIZE = 4;

    const currentGroup = Math.floor((currentPage - 1) / GROUP_SIZE);

    const pageNumbers =
        totalPage === 0 ? [] : getPageGroup(currentPage, totalPage, GROUP_SIZE);
    const hasNextGroup = (currentGroup + 1) * GROUP_SIZE < totalPage;
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
                                    Math.max(1, currentGroup * GROUP_SIZE),
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
                                        Math.ceil(currentPage / GROUP_SIZE) *
                                            GROUP_SIZE +
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
