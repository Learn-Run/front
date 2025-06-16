export interface ProfileImageType {
    type: string;
    imageUrl: string;
    alt: string;
}
export interface ProfileType {
    gradName: string;
    nickName: string;
    ProfileImage: ProfileImageType;
    selfIntroduction: string;
    categoryListIds: number[];
}
