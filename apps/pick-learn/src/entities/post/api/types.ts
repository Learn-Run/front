import { SubCategoryType } from '@/entities/category/api/types';
import { ProfileType } from '@/entities/member/api/types';

export interface AskItem {
    postUuid: string;
    title: string;
    contents: string;
    category: SubCategoryType;
    blindStatus: boolean;
    author: ProfileType;
}

export const askItemList: AskItem[] = [
    {
        postUuid: '1',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 1, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '닉네임입니다',
            alt: '프로필 이미지',
        },
    },
    {
        postUuid: '2',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 2, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '1',
            alt: '프로필 이미지',
        },
    },
    {
        postUuid: '3',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 3, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '3번 닉네임',
            alt: '프로필 이미지',
        },
    },
    {
        postUuid: '4',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 4, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '1',
            alt: '프로필 이미지',
        },
    },
    {
        postUuid: '5',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 5, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '1',
            alt: '프로필 이미지',
        },
    },
    {
        postUuid: '6',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 6, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '1',
            alt: '프로필 이미지',
        },
    },
    {
        postUuid: '7',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 7, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '1',
            alt: '프로필 이미지',
        },
    },
    {
        postUuid: '8',
        title: '요즘 UI툴 뭐가 좋아요 ?',
        contents: '현업자들만 답해 주셨으면 좋겠습니다',
        category: { id: 8, name: 'benefit', color: '#00FF00' },
        blindStatus: false,
        author: {
            memberUuid: '1',
            profileImage: 'https://picsum.photos/400/400',
            nickname: '1',
            alt: '프로필 이미지',
        },
    },
];
