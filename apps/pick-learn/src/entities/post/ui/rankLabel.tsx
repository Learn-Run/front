import Star from '@/shared/assets/icons/star';
import Label from '@/shared/ui/label';

export default function RankLabel() {
    return (
        <Label className='flex items-center gap-1 w-fit'>
            <Star />
            Best Answerer
        </Label>
    );
}
