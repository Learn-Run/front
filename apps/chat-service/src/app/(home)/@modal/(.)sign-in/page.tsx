import { Modal } from '../modal';
import SignInContainer from '@/views/auth/ui/SignInContainer';

export default function SignInModalPage() {
    return (
        <Modal>
            <div className='w-full'>
                <SignInContainer />
            </div>
        </Modal>
    );
}
