export interface ProfileUploadImageType {
    profileImageType: 'jpg' | 'jpeg' | 'png' | 'webp';
    profileImageUrl: string;
    alt: string;
}

export interface UpdateSelfIntroductionType {
    selfIntroduction: string;
}

export interface UpdateCategoryListType {
    categoryList: {
        mainCategoryId: number;
        subCategoryId: number;
    }[];
}
