import { MainWrapper } from '@/shared/ui';
import SignInContainer from '@/views/auth/ui/SignInContainer';

export default function SignInPage() {
    return (
        <MainWrapper className='px-8 py-6 max-w-2xl mx-auto pt-40'>
            <SignInContainer />
        </MainWrapper>
    );
}
