import { Arts, Cook, Fashion, Interior, IT, Jobs } from '@/shared/assets/icons';

export const iconMapById: Record<number, React.FC<{ className?: string }>> = {
    3: Arts,
    4: IT,
    7: Jobs,
    8: Cook,
    9: Interior,
    10: Fashion,
};

export const videoUrlList = ['videos/v001.mp4', 'videos/v002.mp4'];
