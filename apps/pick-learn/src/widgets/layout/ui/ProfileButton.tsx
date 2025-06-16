import Link from 'next/link';

import Profile from '@/shared/assets/icons/Profile';
import { routes } from '@/shared/model/constants/routes';

export default function ProfileButton() {
    return (
        <Link href={routes.profile}>
            <Profile />
        </Link>
    );
}
