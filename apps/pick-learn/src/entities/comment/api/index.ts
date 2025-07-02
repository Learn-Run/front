'use server';
import { fetchData } from '@/shared/api/instance';
import {
    CommentLikeCountType,
    CommentLikeStatusType,
    CommentListType,
    CommentType,
} from './types';
import { services } from '@/shared/api/constants';
import { POST_TAG } from '@/entities/post/api/constants';

export const getCommetList = async (postUuid: string, page: number) => {
    const response = await fetchData.get<CommentListType>(
        `${services.comment}/api/v1/comment/post/${postUuid}/list?page=${page}`,
        {
            tags: [POST_TAG.comment],
        },
    );

    return response.result;
};

export const getComment = async (commentUuid: string) => {
    const response = await fetchData.get<CommentType>(
        `${services.comment}/api/v1/comment/${commentUuid}`,
    );

    return response.result;
};

export const getCommentLikeCount = async (commentUuid: string) => {
    const response = await fetchData.get<CommentLikeCountType>(
        `${services.comment}/api/v1/comment-like/${commentUuid}`,
    );

    return response.result;
};

export const getCommentLikeStatus = async (commentUuid: string) => {
    const response = await fetchData.get<CommentLikeStatusType>(
        `${services.comment}/api/v1/comment-like/${commentUuid}/likes/me`,
        {
            requireAuth: true,
            tags: [POST_TAG.comment],
        },
    );

    return response.result;
};
