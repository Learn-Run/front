import Link from 'next/link';

import { Button } from '@repo/ui/components/base/Button';
import { cn } from '@repo/ui/lib/utils';
import { routes } from '@/shared/constants/routes';

export default function RegisterButton({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <Button
            type='button'
            variant='outline'
            className={cn(className)}
            asChild
        >
            <Link href={routes.signUp}>{children}</Link>
        </Button>
    );
}
