import { ProfileType } from '@/entities/profile/model/types';

// FIXME: dummy data 추가
export const PROFILE: ProfileType = {
    memberUuid: '1234567890',
    nickname: 'User One',
    profileImage: {
        type: 'image',
        imageUrl: 'https://picsum.photos/id/30/200/300',
        alt: 'User One Profile Image',
    },
    grade: { id: 1, name: 'White', color: '#' },
    selfIntroduction: 'Hello, I am User One.',
    categoryList: [
        { mainCategoryId: 1, subCategoryId: 1 },
        { mainCategoryId: 1, subCategoryId: 2 },
        { mainCategoryId: 1, subCategoryId: 3 },
    ],
};
