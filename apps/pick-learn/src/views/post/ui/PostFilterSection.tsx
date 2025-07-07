import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { Button } from '@repo/ui/components/base/Button';
import { routes } from '@/shared/model/constants/routes';
import { categorySearchParams } from '@/entities/category/utils/categorySearchParams';
import Filter from '@/shared/assets/icons/Filter';
import SectionWrapper from '@/shared/ui/wrapper/SectionWrapper';

export default function PostFilterSection({
    searchParams,
}: {
    searchParams: {
        mainCategoryId?: number;
        subCategoryId: number;
        categoryListId: number;
        sort?: string;
    };
}) {
    return (
        <SectionWrapper className='flex justify-between gap-5 pt-15 pb-10'>
            <div className='flex items-center justify-center gap-x-2  border border-[#E5E4E9] rounded-full px-4 py-2'>
                <Filter />
                <span>Filter</span>
            </div>
            <div className='flex gap-x-2'>
                <Button
                    variant='outline'
                    className={cn(
                        'px-4 py-2 text-regular',
                        searchParams.sort === 'RECENT' &&
                            'bg-primary-100 text-white font-semibold hover:bg-primary-100',
                    )}
                    asChild
                >
                    <Link
                        href={`${routes.post}?${categorySearchParams({
                            ...searchParams,
                            sort: 'RECENT',
                        })}`}
                        replace
                        scroll={false}
                    >
                        최신순
                    </Link>
                </Button>
                <Button
                    variant='outline'
                    className={cn(
                        'px-4 py-2 text-regular',
                        searchParams.sort === 'POPULAR' &&
                            'bg-primary-100 text-white font-semibold hover:bg-primary-100',
                    )}
                    asChild
                >
                    <Link
                        href={`${routes.post}?${categorySearchParams({
                            ...searchParams,
                            sort: 'POPULAR',
                        })}`}
                        replace
                        scroll={false}
                    >
                        인기순
                    </Link>
                </Button>
            </div>
        </SectionWrapper>
    );
}
