export interface ProfileUploadImageType {
    profileImageType: 'jpg' | 'jpeg' | 'png' | 'webp';
    profileImageUrl: string;
    alt: string;
}

export interface UpdateMyInfoType {
    selfIntroduction: string;
    categoryList: {
        mainCategoryId: number;
        subCategoryId: number;
    }[];
}
