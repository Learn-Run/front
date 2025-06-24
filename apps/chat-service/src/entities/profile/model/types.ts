export interface ProfileType {
    memberUuid: string;
    grade: {
        id: number;
        name: string;
        color: string;
    };
    nickname: string;
    profileImage: {
        type: string;
        imageUrl: string;
        alt: string;
    };
    selfIntroduction: string;
    categoryList: {
        mainCategoryId: number;
        subCategoryId: number;
    }[];
}
