import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';
import { cn } from '@repo/ui/lib/utils';

export default function CategoryNameItem({
    mainCategoryId,
    categoryName,
    className,
}: {
    mainCategoryId: number;
    className?: string;
    categoryName: string;
}) {
    return (
        <li>
            <Button
                variant={'outline'}
                className={cn(
                    'p-2.5 font-medium hover:bg-primary-100/10 transition-colors duration-200 ease-in-out rounded-sm',
                    className,
                )}
                asChild
            >
                <Link
                    href={`/?mainCategoryId=${mainCategoryId}`}
                    replace
                    scroll={false}
                >
                    {categoryName}
                </Link>
            </Button>
        </li>
    );
}
