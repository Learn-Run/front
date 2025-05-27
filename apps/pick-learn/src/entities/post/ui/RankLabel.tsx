import Star from '@/shared/assets/icons/Star';
import Label from '@/shared/ui/Label';

export default function RankLabel() {
    return (
        <Label className='flex items-center gap-1 w-fit'>
            <Star />
            Best Answerer
        </Label>
    );
}
