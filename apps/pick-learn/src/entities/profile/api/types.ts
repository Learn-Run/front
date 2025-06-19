export interface ProfileImageType {
    type: string;
    imageUrl: string;
    alt: string;
}
export interface ProfileType {
    grade: GradeType;
    nickName: string;
    profileImage: ProfileImageType;
    selfIntroduction: string;
    categoryListIds: number[];
}

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
