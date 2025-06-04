import { Arts, Cook, Fashion, Interior, IT, Jobs } from '@/shared/assets/icons';

export const iconMapById: Record<number, React.FC<{ className?: string }>> = {
    1: Arts,
    2: IT,
    3: Jobs,
    4: Cook,
    5: Interior,
    6: Fashion,
};
