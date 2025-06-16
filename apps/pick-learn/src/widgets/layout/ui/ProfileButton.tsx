import Profile from '@/shared/assets/icons/Profile';
import { routes } from '@/shared/model/constants/routes';
import Link from 'next/link';
import React from 'react';

export default function ProfileButton() {
    return (
        <button>
            <Link href={routes.profile}>
                <Profile />
            </Link>
        </button>
    );
}
