export interface ReviewType {
    reviewId: string;
    reviewerUuid: string;
    revieweeUuid: string;
    rating: number;
    contents: string;
    post: {
        postUuid: string;
        postTitle: string;
    };
    imageList: {
        type: string;
        imageUrl: string;
        alt: string;
    }[];
}

export interface ReviewAverageType {
    ratingAvg: number;
}

export type ReviewAverageValue = number | ReviewAverageType | null;
