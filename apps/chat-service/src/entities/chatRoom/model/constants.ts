import { ProfileType } from '@/entities/profile/model/types';
import type { ChatRoomType } from './types';

export const CHAT_LIST_MOCK: ChatRoomType[] = [
    {
        chatRoomId: '1',
        chatRoomUuid: '1',
        title: '아이돌 취업을 위한 모든 질문 받습니다.',
        participantUuid: '1',
        createdAt: '2023-10-01T12:00:00Z',
        updatedAt: '2023-10-01T12:00:00Z',
        lastMessage: '안녕하세요! 궁금한 점 있으신가요?',
    },
    {
        chatRoomId: '2',
        chatRoomUuid: '2',
        title: '프론트엔드 개발자 취업 Q&A',
        participantUuid: '3',
        createdAt: '2023-11-05T15:30:00Z',
        updatedAt: '2023-11-05T15:30:00Z',
        lastMessage: 'React로 포트폴리오 만들고 있어요!',
    },
    {
        chatRoomId: '3',
        chatRoomUuid: '3',
        title: '해외 취업 준비방',
        participantUuid: '5',
        createdAt: '2023-12-10T09:45:00Z',
        updatedAt: '2023-12-10T09:45:00Z',
        lastMessage: '비자 준비는 어떻게 하시나요?',
    },
];

interface MockMemberType extends ProfileType {
    memberUuid: string;
}

export const MOCK_MEMBERS: MockMemberType[] = [
    {
        memberUuid: '1',
        grade: {
            id: 1,
            name: 'WHITE',
            color: '#FFFFFF',
        },
        nickname: '아이돌준비생',
        profileImage: {
            type: 'jpg',
            imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
            alt: '아이돌준비생 프로필',
        },
        selfIntroduction: '아이돌 데뷔를 꿈꾸는 취준생입니다.',
        categoryList: [
            { mainCategoryId: 1, subCategoryId: 1 },
            { mainCategoryId: 2, subCategoryId: 2 },
        ],
    },
    {
        memberUuid: '3',
        grade: {
            id: 2,
            name: 'SILVER',
            color: '#C0C0C0',
        },
        nickname: '프론트엔드꿈나무',
        profileImage: {
            type: 'jpg',
            imageUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
            alt: '프론트엔드꿈나무 프로필',
        },
        selfIntroduction: 'React와 TypeScript를 공부하고 있어요!',
        categoryList: [{ mainCategoryId: 3, subCategoryId: 3 }],
    },
    {
        memberUuid: '5',
        grade: {
            id: 3,
            name: 'GOLD',
            color: '#FFD700',
        },
        nickname: '해외취업러',
        profileImage: {
            type: 'jpg',
            imageUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
            alt: '해외취업러 프로필',
        },
        selfIntroduction: '해외에서 개발자로 일하고 있습니다.',
        categoryList: [
            { mainCategoryId: 4, subCategoryId: 4 },
            { mainCategoryId: 5, subCategoryId: 5 },
        ],
    },
    {
        memberUuid: '4',
        grade: {
            id: 4,
            name: 'PLATINUM',
            color: '#E5E4E2',
        },
        nickname: '면접관',
        profileImage: {
            type: 'jpg',
            imageUrl: 'https://randomuser.me/api/portraits/women/41.jpg',
            alt: '면접관 프로필',
        },
        selfIntroduction: 'IT기업에서 면접관으로 활동 중입니다.',
        categoryList: [{ mainCategoryId: 1, subCategoryId: 2 }],
    },
    {
        memberUuid: '2',
        grade: {
            id: 2,
            name: 'PLATINUM',
            color: '#E5E4E2',
        },
        nickname: '아이돌멘토',
        profileImage: {
            type: 'jpg',
            imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
            alt: '아이돌멘토 프로필',
        },
        selfIntroduction: '아이돌 준비생들을 돕는 멘토입니다.',
        categoryList: [{ mainCategoryId: 1, subCategoryId: 1 }],
    },
    {
        memberUuid: '3',
        grade: {
            id: 2,
            name: 'SILVER',
            color: '#C0C0C0',
        },
        nickname: '신입개발자',
        profileImage: {
            type: 'jpg',
            imageUrl: 'https://randomuser.me/api/portraits/women/61.jpg',
            alt: '신입개발자 프로필',
        },
        selfIntroduction: '첫 직장에 입사한 신입 개발자입니다.',
        categoryList: [{ mainCategoryId: 1, subCategoryId: 1 }],
    },
];
