import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { Button } from '@repo/ui/components/base/Button';
import { routes } from '@/shared/model/constants/routes';
import { options } from '@/app/api/auth/[...nextauth]/options';
import LogIn from '@/shared/assets/icons/LogIn';
import LogOutButton from './LogOutButton';
import ProfileButton from './ProfileButton';
import PointButton from './PointButton';

export default async function SignButton() {
    const session = await getServerSession(options);
    const isSignedIn = !!session?.user as boolean;

    return (
        <div className='col-span-6 md:col-span-2 xl:col-span-3 flex justify-end items-center gap-2'>
            {isSignedIn ? (
                <>
                    <PointButton />
                    <ProfileButton />
                    <LogOutButton />
                </>
            ) : (
                <>
                    <Button
                        variant='text'
                        className='w-fit hidden md:block'
                        asChild
                    >
                        <Link href={routes.signIn}>log in</Link>
                    </Button>
                    <Button
                        type='button'
                        variant='outline'
                        className='w-fit hidden md:block border-primary-100 text-primary-100'
                        asChild
                    >
                        <Link href={routes.signUp}>Register</Link>
                    </Button>
                    <Link href={routes.signIn} className='w-fit md:hidden'>
                        <LogIn />
                    </Link>
                </>
            )}
        </div>
    );
}
