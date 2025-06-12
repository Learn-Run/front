import { categorySearchParams } from '@/entities/category/utils/categorySearchParams';
import Filter from '@/shared/assets/icons/Filter';
import { Button } from '@repo/ui/components/base/Button';
import { cn } from '@repo/ui/lib/utils';
import Link from 'next/link';

export default function PostFilterSection({
    mainCategoryId,
    subCategoryId,
    categoryListId,
    sort,
}: {
    mainCategoryId: number;
    subCategoryId: number;
    categoryListId: number;
    sort: string;
}) {
    return (
        <section className='flex justify-between container mx-auto gap-5 px-4 md:px-0 2xl:px-0 pt-15 pb-5'>
            <div className='flex items-center justify-center gap-x-2  border border-[#E5E4E9] rounded-full px-4 py-2'>
                <Filter />
                <span>Filter</span>
            </div>
            <div className='flex gap-x-2'>
                <Button
                    variant='outline'
                    className={cn(
                        'px-4 py-2 text-regular',
                        sort === 'recent' &&
                            'bg-primary-100 text-white font-semibold hover:bg-primary-100',
                    )}
                    asChild
                >
                    <Link
                        href={`/post?${categorySearchParams(
                            mainCategoryId,
                            subCategoryId,
                            categoryListId,
                            'recent',
                        )}`}
                    >
                        최신순
                    </Link>
                </Button>
                <Button
                    variant='outline'
                    className={cn(
                        'px-4 py-2 text-regular',
                        sort === 'popular' &&
                            'bg-primary-100 text-white font-semibold hover:bg-primary-100',
                    )}
                    asChild
                >
                    <Link
                        href={`/post?${categorySearchParams(
                            mainCategoryId,
                            subCategoryId,
                            categoryListId,
                            'popular',
                        )}`}
                    >
                        인기순
                    </Link>
                </Button>
            </div>
        </section>
    );
}
