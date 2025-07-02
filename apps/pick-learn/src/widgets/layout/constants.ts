import { Home, PopularPost, Post } from '@/shared/assets/icons';
import { routes } from '@/shared/model/constants/routes';

export const navList = [
    { id: 1, name: 'Home', href: routes.home, isAuth: false, icon: Home },
    {
        id: 2,
        name: '질문보기',
        href: routes.post,
        isAuth: false,
        icon: Post,
    },
    {
        id: 3,
        name: '인기질문',
        href: routes.popularPosts,
        isAuth: false,
        icon: PopularPost,
    },
];
