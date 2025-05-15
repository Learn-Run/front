import { FileType } from '@/shared/types';

export interface RequestPostType {
    categoryListId: number;
    title: string;
    contents: string;
    file: FileType[];
}

export interface ResponsePostType {
    postUuid: number;
    categoryListId: number;
    title: string;
    createdAt: string;
    updatedAt: string;
}

export interface ResponsePostDetailType {
    postUuid: number;
    categoryListId: number;
    title: string;
    contents: string;
    file: FileType[];
    createdAt: string;
    updatedAt: string;
}
