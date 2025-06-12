import { MainWrapper } from '@/shared/ui';
import SignUpContainer from '@/views/auth/ui/SignUpContainer';

export default async function SignUpPage({
    searchParams,
}: {
    searchParams: Promise<{ provider: string }>;
}) {
    const { provider } = await searchParams;

    return (
        <MainWrapper className='px-8 py-6 max-w-2xl mx-auto pt-40'>
            <SignUpContainer provider={provider} />
        </MainWrapper>
    );
}
