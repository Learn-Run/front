import { FileType } from '@/shared/types';

export interface RequestPost {
    categoryListId: number;
    title: string;
    contents: string;
    file: FileType[];
}

export interface ResponsePost {
    postUuid: number;
    categoryListId: number;
    title: string;
    createdAt: string;
    updatedAt: string;
}

export interface ResponsePostDetail {
    postUuid: number;
    categoryListId: number;
    title: string;
    contents: string;
    file: FileType[];
    createdAt: string;
    updatedAt: string;
}
