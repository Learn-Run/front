export interface ProfileType {
    gradeName: string;
    nickname: string;
    profileImage: {
        type: string;
        imageUrl: string;
        alt: string;
    };
    selfIntroduction: string;
    categoryListIds: number[];
}
