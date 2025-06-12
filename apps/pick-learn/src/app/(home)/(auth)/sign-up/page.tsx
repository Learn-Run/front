import { MainWrapper } from '@/shared/ui';
import SignUpContainer from '@/views/auth/ui/SignUpContainer';

export default async function SignUpPage({
    searchParams,
}: {
    searchParams: Promise<{ provider: string }>;
}) {
    const { provider } = await searchParams;

    return (
        <MainWrapper className='pt-40'>
            <SignUpContainer provider={provider} />
        </MainWrapper>
    );
}
