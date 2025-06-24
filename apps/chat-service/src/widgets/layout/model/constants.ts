import Askers from '@/shared/assets/icons/Askers';
import Message from '@/shared/assets/icons/Message';
import Overview from '@/shared/assets/icons/Overview';
import { routes } from '@/shared/model/constants/routes';

export const NAVIGATION_ITEMS = [
    {
        id: 1,
        label: 'Overview',
        icon: Overview,
        href: routes.home,
        mobileHidden: false,
    },
    {
        id: 3,
        label: 'Messages',
        icon: Message,
        href: routes.messages,
        mobileHidden: false,
    },
    // {
    //     id: 4,
    //     label: 'Askers',
    //     icon: Askers,
    //     href: routes.askers,
    //     mobileHidden: false,
    // },
    {
        id: 5,
        label: 'Profile',
        icon: Askers,
        href: routes.profile,
        mobileHidden: true,
    },
];
