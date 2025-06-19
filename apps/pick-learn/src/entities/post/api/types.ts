import { SubCategoryType } from '@/entities/category/api/types';

export interface AskItem {
    postUuid: string;
    memberUuid: string;
    title: string;
    contents: string;
    category: SubCategoryType;
    blindStatus: boolean;
}

export interface AskListType {
    posts: {
        postUuid: string;
        memberUuid: string;
        mainCategoryId: number;
        subCategoryId: number;
        title: string;
        contents: string;
        blindStatus: boolean;
        deletedStatus: boolean;
    }[];
    page: number;
    size: number;
    hasNext: boolean;
    totalElements: number;
    totalPage: number;
}

export interface AskDetailType {
    postUuid: string;
    memberUuid: string;
    mainCategoryId: number;
    subCategoryId: number;
    title: string;
    contents: string;
    images: {
        imageUrl: string;
        alt: string;
    }[];
    blindStatus: boolean;
    deletedStatus: boolean;
    viewCount: number;
    likeCount: number;
    createdAt: string;
    updatedAt: string;
}

export const myActivePostList: AskItem[] = [
    {
        postUuid: '1',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 1, name: '운동', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '2',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 2, name: '운동', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '3',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 3, name: '운동', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '4',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 4, name: '한식', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '5',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 5, name: '한식', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '6',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 6, name: '한식', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '7',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 7, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '8',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 8, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
    },
    {
        postUuid: '9',
        memberUuid: 'user_2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 9, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
    },
];
