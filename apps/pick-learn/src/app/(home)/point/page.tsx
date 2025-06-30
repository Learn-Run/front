import { MainWrapper } from '@/shared/ui';
import PointSection from '@/views/point/ui/PointSection';

export default async function PointPage({
    searchParams,
}: {
    searchParams: Promise<{
        type: string;
    }>;
}) {
    const { type } = await searchParams;

    return (
        <MainWrapper className='pt-40'>
            <PointSection type={type} />
        </MainWrapper>
    );
}
