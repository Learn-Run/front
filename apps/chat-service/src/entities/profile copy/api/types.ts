export interface ProfileImageType {
    type: string;
    imageUrl: string;
    alt: string;
}
export interface ProfileType {
    grade: GradeType;
    nickname: string;
    profileImage: ProfileImageType;
    selfIntroduction: string;
    categoryList: ProfileCategoryListType[];
}

export type ProfileCategoryListType = {
    mainCategoryId: number;
    subCategoryId: number;
};

export interface GradeType {
    id: number;
    name: string;
    color: string;
}

export interface WriterProfileType {
    memberUuid: string;
    nickname: string;
    grade: GradeType;
    profileImage: ProfileImageType;
}
