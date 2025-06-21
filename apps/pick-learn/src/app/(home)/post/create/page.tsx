import PostWriteForm from '@/features/post/ui/PostWriteForm';
import PostWriteTopSection from '@/features/post/ui/PostWriteTopSection';
import { MainWrapper } from '@/shared/ui';

export default function page() {
    return (
        <MainWrapper className='pt-40'>
            <PostWriteTopSection />
            <PostWriteForm />
        </MainWrapper>
    );
}
