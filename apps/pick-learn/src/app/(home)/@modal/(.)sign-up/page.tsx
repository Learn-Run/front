import { Modal } from '../modal';
import SignUpContainer from '@/views/auth/ui/SignUpContainer';

export default async function page({
    searchParams,
}: {
    searchParams: Promise<{ provider: string }>;
}) {
    const { provider } = await searchParams;

    return (
        <Modal>
            <div className='w-full'>
                <SignUpContainer provider={provider} />
            </div>
        </Modal>
    );
}
