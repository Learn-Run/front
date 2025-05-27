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

export const postSubMenu = [
    { id: 1, name: '전체', href: routes.categoryAll },
    {
        id: 2,
        name: '예체능',
        href: routes.categoryArticle,
        detailMenu: [
            { id: 0, name: '전체', href: routes.categoryArticle },
            { id: 1, name: '운동', href: routes.categoryFitness },
            { id: 2, name: '음악', href: routes.categoryMusic },
            { id: 3, name: '댄스', href: routes.categoryDance },
        ],
    },
    {
        id: 3,
        name: 'IT',
        href: routes.categoryIt,
        detailMenu: [
            { id: 0, name: '전체', href: routes.categoryIt },
            { id: 1, name: '디자인', href: routes.categoryDesign },
            { id: 2, name: '개발', href: routes.categoryDevelopment },
            { id: 3, name: '마케팅', href: routes.categoryMarketing },
            { id: 4, name: '영상제작', href: routes.categoryVideoProduction },
        ],
    },
    {
        id: 4,
        name: '취업',
        href: routes.categoryJobs,
        detailMenu: [
            { id: 0, name: '전체', href: routes.categoryJobs },
            { id: 1, name: '면접', href: routes.categoryJobInterview },
            {
                id: 2,
                name: '포폴/이력서 검토',
                href: routes.categoryPortfolioResumeReview,
            },
        ],
    },
    {
        id: 5,
        name: '요리',
        href: routes.categoryCook,
        detailMenu: [
            { id: 0, name: '전체', href: routes.categoryCook },
            { id: 1, name: '한식', href: routes.categoryKoreanCuisine },
            { id: 2, name: '양식', href: routes.categoryWesternCuisine },
            { id: 3, name: '중식', href: routes.categoryChineseCuisine },
            { id: 4, name: '일식', href: routes.categoryJapaneseCuisine },
            { id: 5, name: '베이커리', href: routes.categoryBakery },
        ],
    },
    { id: 6, name: '인테리어', href: routes.categotryInterior },
    {
        id: 7,
        name: '의류/뷰티',
        href: routes.categoryFashion,
        detailMenu: [
            { id: 0, name: '전체', href: routes.categoryFashion },
            { id: 1, name: '코디', href: routes.categoryCody },
            { id: 2, name: '메이크업', href: routes.categoryMakeup },
            { id: 3, name: '헤어', href: routes.categoryHair },
        ],
    },
];
