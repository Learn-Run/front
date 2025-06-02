import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';

export default function CategoryNameItem({ text = 'all' }: { text: string }) {
    return (
        <li>
            <Button
                variant={'outline'}
                className='p-2.5 font-medium hover:bg-primary-100 hover:text-white transition-colors duration-200 ease-in-out'
                asChild
            >
                <Link href={`/category/${text}`}>{text}</Link>
            </Button>
        </li>
    );
}
