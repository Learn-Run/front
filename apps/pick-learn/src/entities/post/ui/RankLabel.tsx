import { cn } from '@repo/ui/lib/utils';
import Star from '@/shared/assets/icons/Star';
import Label from '@/shared/ui/Label';

export default function RankLabel({ className }: { className?: string }) {
    return (
        <Label className={cn('flex items-center gap-1 w-fit', className)}>
            <Star />
            Best Answerer
        </Label>
    );
}
