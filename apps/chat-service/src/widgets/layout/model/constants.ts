import Askers from '@/shared/assets/icons/Askers';
import Meeting from '@/shared/assets/icons/Meeting';
import Message from '@/shared/assets/icons/Message';
import Overview from '@/shared/assets/icons/Overview';
import Setting from '@/shared/assets/icons/Setting';
import { routes } from '@/shared/model/routes';

export const NAVIGATION_ITEMS = [
    {
        id: 1,
        label: 'Overview',
        icon: Overview,
        href: routes.home,
        mobileHidden: false,
    },
    {
        id: 2,
        label: 'Meeting',
        icon: Meeting,
        href: routes.meeting,
        mobileHidden: false,
    },
    {
        id: 3,
        label: 'Messages',
        icon: Message,
        href: routes.messages,
        mobileHidden: false,
    },
    {
        id: 4,
        label: 'Askers',
        icon: Askers,
        href: routes.askers,
        mobileHidden: false,
    },
    {
        id: 5,
        label: 'Setting',
        icon: Setting,
        href: routes.settings,
        mobileHidden: true,
    },
];
