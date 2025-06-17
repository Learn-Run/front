import { ProfileType } from '@/entities/profile/model/types';

// FIXME: dummy data 추가
export const PROFILE: ProfileType = {
    nickname: 'User One',
    profileImage: {
        type: 'image',
        imageUrl: 'https://picsum.photos/id/30/200/300',
        alt: 'User One Profile Image',
    },
    gradeName: 'White',
    selfIntroduction: 'Hello, I am User One.',
    categoryListIds: [1, 2, 3],
};
