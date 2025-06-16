export interface ProfileImageType {
    type: string;
    imageUrl: string;
    alt: string;
}
export interface ProfileType {
    gradeName: string;
    nickName: string;
    profileImage: ProfileImageType;
    selfIntroduction: string;
    categoryListIds: number[];
}
