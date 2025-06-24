'use server';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { routes } from '@/shared/model/constants/routes';
import { options } from '@/app/api/auth/[...nextauth]/options';
import Profile from '@/shared/assets/icons/Profile';

export default async function ProfileButton() {
    const session = await getServerSession(options);
    const memberUuid = session?.user?.memberUuid;

    return (
        <Link href={`${routes.profile}/${memberUuid}`}>
            <Profile />
        </Link>
    );
}
