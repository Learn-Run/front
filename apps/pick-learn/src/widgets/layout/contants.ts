import { Chat, Home, PopularPost, Post, Search } from '@/shared/assets/icons';
import { routes } from '@/shared/constants/routes';

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
    {
        id: 4,
        name: '질문찾기',
        href: routes.searchPosts,
        isAuth: false,
        icon: Search,
    },
    {
        id: 5,
        name: '소통해요',
        href: routes.chat,
        isAuth: true,
        icon: Chat,
    },
];
